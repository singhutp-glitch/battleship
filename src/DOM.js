
class DOM{

    makeGrid(board,rows,columns)
    {console.log('makegrid called');
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

    }
}
module.exports=DOM;
//main
