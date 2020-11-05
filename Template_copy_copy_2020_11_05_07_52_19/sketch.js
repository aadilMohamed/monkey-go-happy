
var monkey , monkey_running
var bananaGroup ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY = 1
var END = 0
var gamestate = 1
var lifetime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  score = 0
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  monkey = createSprite(50,190,10,10)
  monkey.addAnimation("moving",monkey_running)
  ground = createSprite(300,190,600,10)
  

}


function draw() {
background("black")
  if(gamestate === PLAY){ 
  
  if(keyWentDown("up")||keyWentDown("space") && monkey.y >155){
  monkey.velocityY = -10
}
  if (monkey.isTouching(bananaGroup)){
    score++
    bananaGroup.destroyEach();
  }
    textFont("Lobster")
    textSize(20)
    fill("white")
    text("Score: "+score,50,50)
    lifetime = Math.round(frameCount/50);
    text(" "+lifetime,50,100)
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  monkey.scale = 0.1
  monkey.collide(obstacleGroup)
   fruits();
  
  obstacle();
  
  drawSprites();
  }
  if(monkey.x<0){
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    obstacleGroup.lifetime = 0;
    bananaGroup.lifetime = 0;
    ground.destroy();
    text("Game Over!!!",200,100)
  }
}

function fruits(){
  if(frameCount%80 === 0){
    var banana = createSprite(610,10,20,20);
    banana.velocityX = random(-5,-10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.y = random(80,140)
    bananaGroup.add(banana)
  }
}

function obstacle(){
  if(frameCount%300 === 0){
    var rocks = createSprite(610,150,20,20);
    rocks.velocityX = random(-7,-14);
    rocks.addImage(obstacleImage);
    rocks.scale = 0.2
    obstacleGroup.add(rocks);
  }
}


