var bullet,wall
var bullet2,wall2










function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 100, 20, 100);
  bullet=createSprite(100,100,30,10);

  wall2=createSprite(700, 300, 20, 100);
  bullet2=createSprite(100,300,30,10);
}

function draw() {
  background("black");
  
  if(keyCode===RIGHT_ARROW){
    bullet.velocityX=9
  }

if(bullet.isTouching(wall)){
  bullet.velocityX=0;
  wall.shapeColor="green"
}

if(keyCode===UP_ARROW){
  bullet2.velocityX=8
}
if(bullet2.x>700){
bullet2.velocityX=0;
  wall2.shapeColor="red"
}
  drawSprites();
}