const { experiments } = require('webpack');
const Ship=require('./ship');

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