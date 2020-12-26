
var ground;

var redbody1,redbody2,redbody3,ball,d;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//	d=loadImage("24/d.png")
}

function setup() {
	createCanvas(800, 700);
	background(0)
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  
   //this.image=loadImage("d.png");

	//Create the Bodies Here.
		redbody1=Bodies.rectangle(650,650,200,20,{isStatic:true});
	redbody2=Bodies.rectangle(550,613,20,100,{isStatic:true});
	redbody3=Bodies.rectangle(750,613,20,100,{isStatic:true});
    

	World.add(world,redbody1);
	World.add(world,redbody2);
	World.add(world,redbody3);

	//World.add(world,thisimage);
   
	
	Engine.run(engine);
	ground=new Ground(300,680,1100,20);
	ball=new Ball(100,620,30);
	d=new Dusbin(660,600,250,200);
//	ball.scale=100;
 
	
}


function draw() {
  imageMode(CENTER);
  background(255);
  Engine.update(engine);
  drawSprites();
 
  text(mouseX+":"+mouseY,mouseX,mouseY);
 fill("red");
 rect(redbody1.position.x,redbody1.position.y,200,20);
 
 rect(redbody2.position.x,redbody2.position.y,20,100);
 rect(redbody3.position.x,redbody3.position.y,20,100);
 //image(this.image.position.x,this.image.position.y,130,170);

 ball.display();
 ground.display();
 d.display();
 //dustbin.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
Matter.Body.applyForce(ball.body,ball.body.position,{x:36,y:-36});
}
}