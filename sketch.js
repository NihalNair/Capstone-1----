
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var stone,apple,tree;
var ground,rightWall,leftWall;


function setup() {
  createCanvas(windowWidth, windowHeight,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(windowWidth/2, windowHeight, 2000, 2000);

  apple = new Apple(windowWidth-150, 200, 100, 100);
}


function draw()
{
  background(51);
  Engine.update(engine);

  ground.display();
  apple.display();

  

}

