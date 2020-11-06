var thickness,wall;
var speed,weight,bullet;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,50);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  wall=createSprite(1200, 200, thickness, height/2);
  
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
  wall.shapeColor=color(255,0,0)
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletrightEdged=lbullet.x+lbullet.width
wallleftEdged=lwall.x
if(bulletrightEdged>=wallleftEdged){
return true

}
return false
}