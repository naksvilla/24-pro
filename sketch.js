const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(150, 500, 160, 310);
  angle = -PI /4;
  computerBase = new ComputerBase(1000, 500, 160, 310)
  player = new Player(1000, 250, 160, 310);
  computer = new Computer(150,250,160,310)
  playerArcher =  new PlayerArcher(260,250,140,140)
  computerArcher =  new ComputerArcher(890,250,140,140)
  playerArrow =  new PlayerArrow(250,250,100,140)
  computerArrow = new ComputerArrow(890,250,100,140)
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  computerBase.display();
  
  computer.display();
  player.display();
  
  playerArcher.display();
computerArcher.display();

playerArrow.display();
computerArrow.display()
  //Display arrow();
  
 
  }
  function keyReleased(){
    if (keyCode===DOWN_ARROW) {
      arrow.shoot()
    }
  }



