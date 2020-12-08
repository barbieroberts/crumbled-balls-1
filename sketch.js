
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var ball;
var ground;
var dustbin;





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	dustbin =new Dustbin(710,380,100,10,options);
	ball=new Ball(100,280,10);
	ground=Bodies.rectangle(width/2,400,width,10,
		{
			isStatic:true
		}
	);
	World.add(world,ground);
		}
	
  
		Engine.run(engine);


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  dustbin.diaplay();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyforce(ball.body,ball.body.position,{x:12,y:-13})
}
};