
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(width/2,height/4,250,20);


	bobRadius=20;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bobObject1=new bob(startBobPositionX-bobRadius*4,startBobPositionY,bobRadius);
	bobObject2=new bob(startBobPositionX-bobRadius*2,startBobPositionY,bobRadius);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobRadius);
	bobObject4=new bob(startBobPositionX+bobRadius*2,startBobPositionY,bobRadius);
	bobObject5=new bob(startBobPositionX+bobRadius*4,startBobPositionY,bobRadius);

	rope1=new rope(bobObject1.body,roofObject.body,-bobRadius*4, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobRadius*2, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobRadius*2, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobRadius*4, 0)
	

	Engine.run(engine);
  
}


function draw() {
 
  background(120);
  
	roofObject.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}

