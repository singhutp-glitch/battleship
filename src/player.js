const Gameboard = require("./gameboard");

class Player{
    constructor(typeNumber)
    {
        this.type=typeNumber===0?'comp':'real';
        this.gameBoard=new Gameboard;

    }
    
}

module.exports=Player;