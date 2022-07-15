var ball
var ground
var bin_side1
var bin_side2
var edge_sprite1
var edge_sprite2
var edge_sprite3
var edge_sprite4

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;

  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0, 
    density:1.2
  }


	//fill(white)

	//Create the Bodies Here.
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

  ground =new Ground(1.5,590,1500,10);
  bin_side1 =  new Ground(500,520,10,70)
  bin_side2 =  new Ground(680,520,10,70)

	Engine.run(engine);
  


}



function draw() {

  background(0);


  Engine.update(engine);
  ground.show()
  bin_side1.show()
  bin_side2.show()


  keyPressed()

  ellipse(ball.position.x,ball.position.y,20);


}



 


function keyPressed(){

 if(keyDown("space")){

  Matter.Body.applyForce(ball, ball.position, { x: 10, y: -20 });

 }

}