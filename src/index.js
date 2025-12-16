import "./styles.css";
console.log("hello");
const Player=require('./player');

class NewGame{
    
    constructor()
    {
        this.player1=new Player(1);
        this.player2=new Player(0);
        this.setup(this.player1);
        this.setup(this.player2);
    }
    setup(player)
    {
        player.gameBoard.placeShip([1,1],3,1);
        player.gameBoard.placeShip([2,1],2,1);
        player.gameBoard.placeShip([3,1],1,1);
    }
    
}