const Ship = require("./ship");

class Gameboard{
    constructor(){
        this.rows=10;
        this.columns=10;
        this.board=Array.from({length:this.rows},()=>Array.from({length:this.columns},
            ()=>({
                isHit:false,
                isShip:-1
            })));
        this.noOfShips=0;
        this.noOfSunkShips=0;
        this.ships=[];
    }

    cell(row ,column)
    {
        return this.board[row][column];
    }
    createShip(length)
    {
        this.ships.push(new Ship(length));;
    }
    placeShip(start,length,direction)
    {
        let first;
        this.createShip(length);
        let i;
        if(direction===0)
        {
            first=start[0];
            for(i=0;i<length;i++)
            {
                this.board[first-i][start[1]].isShip=this.noOfShips;
            }
        }
        else if(direction===1)
        {
            first=start[1];
            for(i=0;i<length;i++)
            {
                this.board[start[0]][first+i].isShip=this.noOfShips;
            }
        }
        else if(direction===2)
        {
            first=start[0];
            for(i=0;i<length;i=i++)
            {
                this.board[first+i][start[1]].isShip=this.noOfShips;
            }
        }
        else if(direction===3)
        {
            first=start[1];
            for(i=0;i<length;i=i++)
            {
                this.board[start[0]][first-i].isShip=this.noOfShips;
            }
        }
        this.noOfShips++;
        
    }
    isPlacable(start,length,direction)
    {
        let first;
        let last;
        if(direction===0)
        {
            first=start[0];
            last=first-length;
            if(last<0) return false;
            for(i=0;i<length;i++)
            {
                if(this.board[first-i][start[1]].isShip===true) return false;
            }
        }
        else if(direction===1)
        {
            first=start[1];
            last=first+length;
            if(last>4)return false;
            for(i=0;i<length;i++)
            {
                if(this.board[start[0]][first+i].isShip===true)return false;
            }
        }
        else if(direction===2)
        {
            first=start[0];
            last=first+length;
            if(last>4)return false;
            for(i=0;i<length;i=i++)
            {
                if(this.board[first+i][start[1]].isShip===true)return false;
            }
        }
        else if(direction===3)
        {
            first=start[1];
            last=first-length;
            if(last<0)return false;
            for(i=0;i<length;i=i++)
            {
                if(this.board[start[0]][first-i].isShip===true)return false;
            }
        }
        return true;

    }
    receiveAttack(row,column)
    {
        this.board[row][column].isHit=true;
        const shipNum=this.cell(row,column).isShip;
        if(shipNum>=0)
        {
            const ship=this.ships[shipNum];
            ship.hit();
            this.updateSunkShips(ship);
        }
        return (this.cell(row,column).isShip>=0);
    }
    checkHitStatus(row,column)
    {
        return this.cell(row,column).isHit;
    }
    updateSunkShips(ship)
    {
        if(ship.isSunk())
        {
            this.noOfSunkShips++;
        }
    }
    isAllSunk()
    {
        return (this.noOfShips===this.noOfSunkShips);
    }
}

module.exports=Gameboard;