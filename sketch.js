const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var groundraw,ball;

function setup(){
    var canvas = createCanvas(400,400);
   engine = Engine.create();
   world=engine.world;

   var option={
       isStatic:true
   }

   ground = Bodies.rectangle(10,390,800,20,option);
   World.add(world,ground);

   var a = {
       restitution:1.0
   }
   ball=Bodies.circle(200,200,40,a)
  World.add(world,ball);
 

   
}

function draw(){
    background(0);
    Engine.update(engine)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
}
