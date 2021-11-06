var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  object1=loadImage("obstacle1.png")
  object2=loadImage("obstacle2.png")
  object3=loadImage("obstacle3.png")
  object4=loadImage("obstacle4.png")
  object5=loadImage("obstacle5.png")
  object6=loadImage("obstacle6.png")
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)

  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObjects();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloud.lifetime= 200;
    }
}

function spawnObjects(){
 if(frameCount % 100 === 0){
   object = createSprite(600,160,20,20);
   object.velocityX=-2;
   var rand=Math.round(random(1,6))

   switch(rand){
     case 1:
       object.addImage(object1);
       break;
       case 2:
       object.addImage(object2);
       break;
       case 3:
       object.addImage(object3);
       break;
       case 4:
       object.addImage(object4);
       break;
       case 5:
       object.addImage(object5);
       break;
       case 6:
       object.addImage(object6);
       break;

   }
   object.scale=0.5
   object.lifetime=200
 }
}
