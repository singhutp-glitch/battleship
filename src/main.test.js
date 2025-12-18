const { experiments } = require('webpack');
const Ship=require('./ship');
const Gameboard=require('./gameboard');
const Player=require('./player');
const {Ai,RandomStrategy,HuntState}=require('./ai');


test('should initialize ship',()=>{
    const ship=new Ship(5);
    expect(ship.length).toBe(5);    
})
test('hit should work',()=>{
    const ship=new Ship(5);
    ship.hit();
    expect(ship.noOfHits).toBe(1);
})

test('hit should not exceed length',()=>{
    const ship=new Ship(1);
    ship.hit();
    ship.hit();
    expect(ship.noOfHits).toBe(1);
})

test('isSunk should work',()=>{
    const ship=new Ship(1);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
    
})

//gameboard
test('should initialize gameboard',()=>{
    const gameBoard=new Gameboard();
    expect(gameBoard.cell(1,1).isShip).toBe(-1);
})
test('placeShip should work',()=>{
    const gameBoard=new Gameboard();
    gameBoard.placeShip([1,1],4,1);
    expect(gameBoard.cell(1,1).isShip).toBe(0);
    expect(gameBoard.noOfShips).toBe(1);
})
test('isPlace check out of bound',()=>{
    const gameBoard=new Gameboard;
    expect(gameBoard.isPlacable([1,1],4,0)).toBe(false);
})
test('isPlace check crossing ships',()=>{
    const gameBoard=new Gameboard;
    gameBoard.placeShip([1,1],4,1);
    expect(gameBoard.isPlacable([1,1],4,2)).toBe(false);
    
})

test('receiveAttack should work',()=>{
    const gameBoard=new Gameboard;
    gameBoard.receiveAttack(1,1);
    expect(gameBoard.board[1][1].isHit).toBe(true)
})
test('receiveAttack return hit or miss',()=>{
    const gameBoard=new Gameboard;
    expect(gameBoard.receiveAttack(1,1)).toBe(false);
    gameBoard.placeShip([1,1],3,1);
    expect(gameBoard.receiveAttack(1,1)).toBe(true);
})

test('receiveAttack send hit to ship',()=>{
    const gameBoard=new Gameboard;
    gameBoard.placeShip([1,1],3,1);
    gameBoard.receiveAttack(1,1);
    expect(gameBoard.ships[0].noOfHits).toBe(1);
    gameBoard.receiveAttack(1,3);
    expect(gameBoard.ships[0].noOfHits).toBe(2);
})
test('receiveAttack assume fresh hit',()=>{
    const gameBoard=new Gameboard;
    gameBoard.placeShip([1,1],3,1);
    gameBoard.receiveAttack(1,1);
    expect(gameBoard.ships[0].noOfHits).toBe(1);
    gameBoard.receiveAttack(1,1);
    expect(gameBoard.ships[0].noOfHits).toBe(2);  
})

test('checkHitStatus works',()=>{
    const gameBoard=new Gameboard;
    expect(gameBoard.checkHitStatus(1,1)).toBe(false);
    gameBoard.receiveAttack(1,1);
    expect(gameBoard.checkHitStatus(1,1)).toBe(true);
})

test('isAllSunk should work',()=>{
    const gameBoard =new Gameboard;
    gameBoard.placeShip([1,1],3,1);
    expect(gameBoard.isAllSunk()).toBe(false);
    gameBoard.receiveAttack(1,1);
    expect(gameBoard.isAllSunk()).toBe(false);
    gameBoard.receiveAttack(1,2);
    expect(gameBoard.isAllSunk()).toBe(false);
    gameBoard.receiveAttack(1,3);
    expect(gameBoard.isAllSunk()).toBe(true);
})

test('player class should initiate',()=>{
    const player1=new Player(0);
    expect(player1.type).toBe("comp");
})

test('player should have Gameboard',()=>{
    const player1=new Player(0);
    expect(player1.gameBoard.noOfShips).toBe(0);
})

test('nextMove should work',()=>{
   const strategy=new RandomStrategy;
   const player=new Player(0);
   const hitCell=strategy.nextMove(90,player.gameBoard);
   expect(hitCell[0]).toBe(0);
   expect(hitCell[1]<=9).toBe(true);
})

test('HuntState should initiate',()=>{
    const huntState=new HuntState();
    const player=new Player(0);
    const hitCell=huntState.strategy.nextMove(90,player.gameBoard);
    expect(hitCell[0]).toBe(0);
    expect(hitCell[1]<=9).toBe(true);
})
test('Ai should initiate',()=>{
    const ai=new Ai();
    const player=new Player(0);
    const hitCell=ai.currentState.strategy.nextMove(90,player.gameBoard);
    expect(hitCell[0]).toBe(0);
    expect(hitCell[1]<=9).toBe(true);
})
test('aiChoice should work',()=>{
    const ai=new Ai();
    const player=new Player(0);
    const hitCell=ai.aiChoice(90,player.gameBoard);
    expect(hitCell[0]).toBe(0);
    expect(hitCell[1]<=9).toBe(true);

})
test('ComputerChoice should work',()=>{
    const player=new Player(0);
    let hitCell=[0,0];
    player.computerChoice(hitCell,90);
    expect(hitCell[0]).toBe(0);
    expect(hitCell[1]<=9).toBe(true);

})