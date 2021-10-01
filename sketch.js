var database;
var gameState = 0;
var form,game,nane; 

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background("lightBlue");  
  drawSprites();
}