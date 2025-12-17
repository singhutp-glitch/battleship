const Gameboard = require("./gameboard");

class Player{
    constructor(typeNumber)
    {
        this.type=typeNumber===0?'comp':'real';
        this.gameBoard=new Gameboard;

    }
    computerChoice(hitCell,round)
    {
        hitCell[0]=Math.floor(round/10);
        hitCell[1]=round%10;
    }
}

module.exports=Player;