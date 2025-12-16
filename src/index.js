import "./styles.css";

const Player=require('./player');
const DOM=require('./DOM');

class NewGame{
    
    constructor()
    {
        this.domElement=new DOM;
        this.board1=document.querySelector('.board1');
        this.board2=document.querySelector('.board2');
        
        this.domElement.makeGrid(this.board1,10,10);
        this.domElement.makeGrid(this.board2,10,10);

        this.player1=new Player(1);
        this.player2=new Player(0);
        this.setup(this.player1,this.board1);
        // this.setup(this.player2,this.board2);
        this.playBtn=document.querySelector('button.play');
        this.playBtn.addEventListener('click',()=>{
            this.playBtn.remove();
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
    
}
//main
const newGame = new NewGame;
