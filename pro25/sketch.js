
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,dustbinImg,groundObject;	
var world;
var paper,paperImg;


function preload(){

paperImg=loadImage("paper.png");


}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

    options={
		'setStacic':false,
		 'restitution':0.3,
		  'friction': 0.5,
	       'density':1.2
	
		}

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
    
	paper=Bodies.circle(300,300,4,options);
	image(paperImg,300,300,30,30);
    
	World.add(world, paper);
	ellipseMode(CENTER);
   ellipse(paper.x,paper.y,300,200);

}



function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  dustbinObj.display();
  
}

