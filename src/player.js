const Gameboard = require("./gameboard");
const {Ai,RandomStrategy,HuntState}=require('./ai');

class Player{
    constructor(typeNumber)
    {
        this.type=typeNumber===0?'comp':'real';
        this.gameBoard=new Gameboard;
        this.aiBot;
        if(typeNumber===0)
        {
            this.aiBot= new Ai;
        }

    }
    computerChoice(hitCell,round)
    {
        // hitCell[0]=Math.floor(round/10);
        // hitCell[1]=round%10;

        const choice=this.aiBot.aiChoice(round,this.gameBoard);
        hitCell[0]=choice[0];
        hitCell[1]=choice[1];
    }
}

module.exports=Player;