class Ai{
    constructor()
    {
        this.huntState=new HuntState();
        // this.targetState=new TargetState();
        this.currentState=this.huntState;
    }
    aiChoice(round,board)
    {
        return this.currentState.strategy.nextMove(round,board);
    }
}

class RandomStrategy{
    nextMove(round,board)
    {
        const position=this.randPosition(98-round);
        let unHitPositionCount=-1;
        for(let i=0;i<100;i++)
        {
            const row=Math.floor(i/10);
            const col=i%10;

            if(board.cell(row,col).isHit===false)unHitPositionCount++;
            if(unHitPositionCount===position)
            {
                return [row,col];
            }
            
        }

        console.log('out of loop '+round+' '+position+' '+unHitPositionCount);
        return [0,0];
    }
    randPosition(max)
    {
        return Math.floor(Math.random()*(max+1));
    }

}
class HuntState
{
    constructor()
    {
        this.strategy=new RandomStrategy;
    }
}

module.exports={Ai,RandomStrategy,HuntState};