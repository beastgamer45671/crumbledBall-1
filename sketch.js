
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3;
var ground;
var p;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=Bodies.rectangle(500, 350, 20, 80);
	World.add(world,rect1);

	ground=Bodies.rectangle(20, 400, 1500, 5);
	World.add(world,ground);

	rect2=Bodies.rectangle(550, 390, 100, 20);
	World.add(world,rect2);

	rect3=Bodies.rectangle(600, 350, 20, 80);
	World.add(world,rect3);

	p = new Paper(200, 120, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  rect(500, 350, 20, 80);
  rect(550, 390, 100, 20);
  rect(600, 350, 20, 80);
  rect(20, 400, 1500, 5);
  p.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
  
    }	
}

