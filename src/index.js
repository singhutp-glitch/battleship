import Position from "./shipPositions";
import "./styles.css";

const Player=require('./player');
const DOM=require('./DOM');

class NewGame{
    turn=1;
    round=0;
    isGameOver=false;
    constructor()
    {
        this.orientationList=this.makeOrientations();
        this.domElement=new DOM;
        this.board1=document.querySelector('.board1');
        this.board2=document.querySelector('.board2');
        
        this.domElement.makeGrid(this.board1,10,10);
        this.domElement.makeGrid(this.board2,10,10);

        this.player1=new Player(1);
        this.player2=new Player(0);
        this.setOrientation(this.orientationList[0],this.player1);
        this.showOrientation(this.orientationList[0],this.board1);
        this.setOrientation(this.orientationList[0],this.player2);
        
        // this.setup(this.player1,this.board1);
        // this.setup(this.player2,this.board2);
        this.playBtn=document.querySelector('button.play');
        this.playBtn.addEventListener('click',()=>{
            this.playBtn.remove();
            this.domElement.addMessageBox();
            this.startGame();
        })
        
    }
    setup(player,board)
    {
        player.gameBoard.placeShip([1,1],3,1);
        this.domElement.placeShip(board,[1,1],3,1);
        player.gameBoard.placeShip([2,1],2,1);
        this.domElement.placeShip(board,[2,1],2,1);
        player.gameBoard.placeShip([3,1],1,1);
        this.domElement.placeShip(board,[3,1],1,1);
    }
    startGame()
    {
        console.log('start game');
        this.board2.addEventListener('pointerdown',(event)=>{
            if(this.turn===1&& this.isGameOver===false){
                let hitCell=[];
                hitCell.push(event.target.dataset.row);
                hitCell.push(event.target.dataset.col);
                
                const haveHit=this.player2.gameBoard.checkHitStatus(hitCell[0],
                    hitCell[1]);
                
                if(haveHit===false)
                {
                    if(!this.player2.gameBoard.receiveAttack(hitCell[0],hitCell[1]))
                    {
                        this.domElement.missShot(event.target);
                    }
                    else
                    {
                        this.domElement.hitShot(event.target);
                        if(this.player2.gameBoard.isAllSunk())
                        {
                            this.gameOver(1);
                            return;
                        }
                    }
                    this.turn=2;
                    this.domElement.setMessage('Player2 attack');
                    this.computerTurn();
                }
                else{
                    this.domElement.setMessage('Already hit');
                }
            }
        })

        // this.board1.addEventListener('click',(event)=>{
        //     if(this.turn===2){
        //         let hitCell=[];
        //         hitCell.push(event.target.dataset.row);
        //         hitCell.push(event.target.dataset.col);
        //         const haveHit=this.player1.gameBoard.checkHitStatus(hitCell[0],
        //             hitCell[1]);
        //         console.log(haveHit);
        //         if(haveHit===false)
        //         {
        //             if(!this.player1.gameBoard.receiveAttack(hitCell[0],hitCell[1]))
        //             {
        //                 this.domElement.missShot(event.target);
        //             }
        //             else
        //             {
        //                 this.domElement.hitShot(event.target);
        //             }
        //             this.turn=1;
        //             this.domElement.setMessage('Player1 attack');
        //         }
        //         else{
        //             this.domElement.setMessage('Already hit');
        //         }
        //     }
        // })
    }
    computerTurn()
    {
        const hitCell=[];
        this.player2.computerChoice(hitCell,this.round);
        
        const cell=(this.board1.children[hitCell[0]]).children[hitCell[1]];
        if(!this.player1.gameBoard.receiveAttack(hitCell[0],hitCell[1]))
        {
            this.domElement.missShot(cell);
        }
        else
        {
            this.domElement.hitShot(cell);
            if(this.player1.gameBoard.isAllSunk())
            {
                this.gameOver(2);
                return;
            }
        }
        this.turn=1;
        this.domElement.setMessage('Player1 attack');
        this.round++;

    }
    gameOver(winner)
    {
        this.isGameOver=true;
        this.domElement.setMessage('Player'+winner+' wins');
    }
    makeOrientations()
    {
        const orientationList=[];
        const orientation=[];
        orientation.push(new Position([1,1],4,1));
        orientation.push(new Position([2,1],3,1));
        orientation.push(new Position([3,1],2,1));
        orientation.push(new Position([4,1],1,1));
        orientationList.push(orientation);
        return orientationList
    }
    setOrientation(orientation,player)
    {
        for(let position of orientation)
        {
            player.gameBoard.placeShip(position.start,position.length
                ,position.direction);
        }
    }
    showOrientation(orientation,board)
    {
        for(let position of orientation)
        {
            this.domElement.placeShip(board,position.start,position.length
                ,position.direction);
        }
    }
}
//main
const newGame = new NewGame;
