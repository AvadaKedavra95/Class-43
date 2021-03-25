var ironMan;
var bg;
var ground

function preload(){
    
}



function setup(){
  createCanvas(1200,500);
  ironMan=createSprite(900,270,30,30);
  ground=createSprite(width/2,460,width,10);
  ground.velocityX=2;
}
function draw(){
  background(05,250,255);
  if(ground.x>ground.x/2){
    ground
  }

  if(keyDown(UP_ARROW)){
    ironMan.y-=10;
  }

  if(keyDown(DOWN_ARROW)){
    ironMan.y+=10;
  }



  drawSprites();
}