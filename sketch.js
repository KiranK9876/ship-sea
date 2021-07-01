var ship, ship_img
var sea, sea_img


function preload(){
  sea_img=loadImage("sea.png")
  ship_img=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")



}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,20)
  sea.addImage(sea_img)
  sea.scale=0.5
  sea.velocityX=-2
  ship=createSprite(50,300,20,20)
  ship.addAnimation("S1",ship_img)
  ship.scale=.10
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=width/2
  }
  drawSprites()
 
}