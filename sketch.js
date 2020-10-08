var engine,world;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var body,ground;

function setup() {

  createCanvas(800,400);
  
   engine = Engine.create()
   world = engine.world;
   box1 = new box(400,200,50,50);
   box2 = new box(500,50,30,100);
var a = {
  isStatic: true

  
}

   
   ground  = Bodies.rectangle(400,380,800,10,a);
   World.add(world,ground);

   

}

function draw() {
  background(0,0,0);  
  Engine.run(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10);

  
  box1.display();
  box2.display();
}
