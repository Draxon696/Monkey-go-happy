
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, obstacle1
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale = 0.1; 
 if(keyDown("space")) {
      trex.velocityY = -12;
    }
 
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  obstacle = createSprite(400,320,50,10);
  obstacle.velocityX = -5;
  obstacle.addImage("obstacle.png",obstacleImage);
 obstacle.scale = 0.136;
  
  obstaclesGroup = new Group();
}


function draw(){
background(255);
  if (ground.x<0){
    ground.x = ground.width/2
  }
  
   if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  drawSprites();
  
  function spawnObstacles() {
 
   
    //obstacle.debug = true;
    
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
    //assign scale and lifetime to the obstacle           
   
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
  
}






