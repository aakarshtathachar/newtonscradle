
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new roofClass(300,100,300,10);

	bob1 = new  BobClass(200,400,20);
	bob2 = new BobClass(240,400,20);
	bob3 = new BobClass(280,400,20);
	bob4 = new BobClass(320,400,20);
	bob5 = new BobClass(360,400,20);
	  
	rope1=new rope(bob3.body,ground.body,0,0);
	rope2=new rope(bob1.body,ground.body,-80,0);
	rope3=new rope(bob2.body,ground.body,-40,0);
	rope4=new rope(bob4.body,ground.body,40,0);
	rope5=new rope(bob5.body,ground.body,80,0);

	//Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(180);
  
ground.display();  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-45});
	}
	}



