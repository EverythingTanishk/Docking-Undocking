var bg, bath, brush, drink, eat, gym, move, sleep;
var edges;
function preload(){
  bg = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadImage("sleep.png");
}



function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg); 
  eges=createEdgeSprites();
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=5;
    astronaut.velocityY=7;
  }
  text("Instructions:",600,30);
  text("Up Arrow = Brushing",600,40);
  text("Down Arrow = Gymming",600,60);
  text("Left Arrow = Eating",600,80);
  text("Right Arrow = Bathing",600,100);
  text("m key = Moving",600,120);
  drawSprites();
}