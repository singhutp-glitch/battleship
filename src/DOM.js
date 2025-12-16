
class DOM{

    makeGrid(board,rows,columns)
    {
        for(let i=0;i<rows;i++)
        {
            const rowElement=document.createElement('div');
            rowElement.classList.add('row'+(i+1));
            rowElement.classList.add('row');

            for(let j=0;j<columns;j++)
            {
                const colElement=document.createElement('div');
                colElement.classList.add('col'+(j+1));
                colElement.classList.add('col');
                
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
                    if(column<10)
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
                if(column<10)
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
                }
                if(i===length-1)
                {
                    (board.children[row]).children[column].classList.add('left');        
                }

                (board.children[row]).children[column].classList.add('fill');
                (board.children[row]).children[column].classList.add('up');
                (board.children[row]).children[column].classList.add('down');
            }
        }
        
    }
}
module.exports=DOM;
//main
