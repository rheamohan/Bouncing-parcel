
// Storing helicopter and its Img variable to upload
var helicopterIMG, helicopterSprite
// Storing package and its Img variable to upload
var packageSprite,packageIMG;
// Storing Ground and packageBody,invisible of packageSprite
var packageBody,ground

// Engine storing Matter.Engine
// So that we dont have to write Matter.Engine again and again
// Engine --> World --> Bodies --> Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// preload Function {to load all pics and sound};
function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

// setup Function {to create the sprites}
function setup() {

	// Canvas
	createCanvas(800, 700);
	// rectMode to make the sprites make in the centre
	rectMode(CENTER);
	
	// packageSprite 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//engine sprite is Creating Engine, Engine is holding Matter.Engine
	engine = Engine.create();

	// world is holding engine.world
	world = engine.world;

// packagBody is invisible but is working for packageSprite
// restitution = How slow or fast you want the sprite to bounce 
// isStatic = A moving body will stop after some time SO TRUE

packageBody =Bodies.circle(width/2,200,5,{restitution:1, isStatic:true});

// World containing Matter.World is adding here world and packageBody
// world is containg engine.world;
	World.add(world, packageBody);
	
	//Create a Ground
// World containing Matter.World is adding here world and ground
// world is containg engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true} );
 	World.add(world, ground);

// Engine containg Matter.engine is running engine
// engine is containg Engine.create
	Engine.run(engine);
}


function draw() {
  // CENTER
  rectMode(CENTER);
  // background is black
  background(0);
  // packageSprite x & y position is = packageBody x & y position
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
}

// when key is pressed this should happen
function keyPressed() {
// keyCode = keyDown in VSC
 if (keyCode === DOWN_ARROW) {
// static should set in packageBody 
	 Matter.Body.setStatic(packageBody,false);
// static is true;
	 isStatic:true;
  }
}



