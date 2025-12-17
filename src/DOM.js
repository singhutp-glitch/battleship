
class DOM{

    removeAllShips(board)
    {
        for(let row=0;row<10;row++)
        {
            for(let col=0;col<10;col++)
            {
                if(col===0)
                {
                    (board.children[row]).children[col].classList='leftEdge col col'+col;
                }
                else if(col===9)
                {
                    (board.children[row]).children[col].classList='rightEdge col col'+col;
                }
                else{
                    (board.children[row]).children[col].classList='col col'+col;
                }
            }
        }
    }
    makeGrid(board,rows,columns)
    {
        for(let i=0;i<rows;i++)
        {
            const rowElement=document.createElement('div');
            rowElement.classList.add('row'+(i));
            rowElement.classList.add('row');

            for(let j=0;j<columns;j++)
            {
                const colElement=document.createElement('div');
                colElement.classList.add('col'+(j));
                colElement.classList.add('col');
                if(j===0)colElement.classList.add('leftEdge');
                if(j===9)colElement.classList.add('rightEdge');

                colElement.dataset.row=i;
                colElement.dataset.col=j;
                
                rowElement.append(colElement);
            }
            board.append(rowElement);
        }
    }

    placeShip(board,start,length,direction)
    {
        let first;
        let i;
        if(direction===0)
        {
            first=start[0];
            for(i=0;i<length;i++)
            {
                let row=first-i;
                let column=start[1];
                if(i===0)
                {
                    (board.children[row]).children[column].classList.add('down');    
                }
                if(i===length-1)
                {
                    (board.children[row]).children[column].classList.add('up');        
                }

                (board.children[row]).children[column].classList.add('fill');
                (board.children[row]).children[column].classList.add('left');
                if(column>0)
                {
                    (board.children[row]).children[column-1].classList.add('removeRight');
                }
                (board.children[row]).children[column].classList.add('right');

                if(column<10)
                {
                    (board.children[row]).children[column+1].classList.add('removeLeft');
                }
            }
        }
        else if(direction===1)
        {
            first=start[1];
            for(i=0;i<length;i++)
            {
                let row=start[0];
                let column=first+i;
                if(i===0)
                {
                    (board.children[row]).children[column].classList.add('left');
                    if(column>0)
                    {
                        (board.children[row]).children[column-1].classList.add('removeRight');
                    }    
                }
                if(i===length-1)
                {
                    (board.children[row]).children[column].classList.add('right');        
                    if(column<9)
                    {
                        (board.children[row]).children[column+1].classList.add('removeLeft');
                    }
                }

                (board.children[row]).children[column].classList.add('fill');
                (board.children[row]).children[column].classList.add('up');
                (board.children[row]).children[column].classList.add('down');
            }
        }
        else if(direction===2)
        {
            first=start[0];
            for(i=0;i<length;i++)
            {
                let row=first+i;
                let column=start[1];
                if(i===0)
                {
                    (board.children[row]).children[column].classList.add('up');    
                }
                if(i===length-1)
                {
                    (board.children[row]).children[column].classList.add('down');        
                }

                (board.children[row]).children[column].classList.add('fill');
                (board.children[row]).children[column].classList.add('left');
                if(column>0)
                {
                    (board.children[row]).children[column-1].classList.add('removeRight');
                }
                (board.children[row]).children[column].classList.add('right');
                if(column<9)
                {
                    (board.children[row]).children[column+1].classList.add('removeLeft');
                }
            }
        }
        else if(direction===3)
        {
            first=start[1];
            for(i=0;i<length;i++)
            {
                let row=start[0];
                let column=first-i;
                if(i===0)
                {
                    (board.children[row]).children[column].classList.add('right');   
                    if(column<9)
                    {
                        (board.children[row]).children[column+1].classList.add('removeLeft');
                    } 
                }
                if(i===length-1)
                {
                    (board.children[row]).children[column].classList.add('left');   
                    if(column>0)
                    {
                        (board.children[row]).children[column-1].classList.add('removeRight');
                    }      
                }

                (board.children[row]).children[column].classList.add('fill');
                (board.children[row]).children[column].classList.add('up');
                (board.children[row]).children[column].classList.add('down');
            }
        }
        
    }
    missShot(cell)
    {
        cell.classList.add('miss');
    }
    hitShot(cell)
    {
        cell.classList.add('hit');
    }
    addMessageBox()
    {
        const messageBox=document.createElement('div');
        messageBox.classList.add('messBox');
        messageBox.textContent='Captain Attack';
        const buffer=document.querySelector('div.buffer');
        buffer.append(messageBox);
    }
    setMessage(message)
    {
        const messageBox=document.querySelector('div.messBox');
        messageBox.textContent=message;
    }
}
module.exports=DOM;
//main
