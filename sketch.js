//const matterMin = require("./matter.min");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle = 60;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   }
  

   ground = Bodies.rectangle(200,390,400,20,ground_options);  //create a ground
   World.add(world,ground);  //add to worldgro

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);  // to make rectangle center
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  Matter.Body.rotate(ground,angle);  // to rotate the ground
  push(); 
  translate(ground.position.x,ground.position.y);
  rotate(angle);
  rect(0,0,400,20)      //write a rectangle function to display ground.
  pop(); 
  angle+=0.1;
}

