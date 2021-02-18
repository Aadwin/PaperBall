
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(350,350,15);
	//console.log(paperObject);

	basket1 = new Basket(1400,500,20,200);
	basket2 = new Basket(1240,580,300,20);
	basket3 = new Basket(1080,500,20,200);

	ground = new Ground(750,600,1500,20);


	Engine.run(engine);
	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  basket1.display();
  basket2.display();
  basket3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{
			x:50,
			y:-50
		});
	}
}



