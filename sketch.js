
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var paper;
var ground;
var dustbin,dustbinimage;

function preload()
{
  dustbinimage = loadImage("dustbingreen.png")
}





function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Log(600,390,1200,5);  
  

  paper = new Paper(200,370,50);

  dustbin =createSprite(900,310,20,20);
  dustbin.addImage(dustbinimage);
  dustbin.scale = 0.5

  binleft = new Dustbin(850,340,20,100);
  binright = new Dustbin(950,340,20,100);
  binmiddle = new Dustbin(900,380,100,20); 

  Engine.run(engine); 
  
}


function draw() {
   background(250);

   rectMode(CENTER);
   
   Engine.update(engine)

   paper.display();
   ground.display();
   binleft.display();
   binright.display();
   binmiddle.display()
   
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body, paper.body.position, {x:110,y:-110})
}

}



