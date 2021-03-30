var bg,bgimage
var mainplayer,mainplayerImage
var mainplayertwo,mainplayerimagetwo




function preload(){
  bgimage=loadImage("bg.jpg")
mainplayerimagetwo=loadImage("main player 2.png")
  mainplayerImage=loadImage("main player.png")

  
}

function setup() {
  createCanvas(1500,600);
  mainplayer=createSprite(395,425,50,50)
  mainplayer.addImage("hero",mainplayerImage)
  mainplayertwo=createSprite(918,448,50,50)
  mainplayertwo.addImage("zero",mainplayerimagetwo)
  mainplayertwo.scale=0.5
}

function draw() {
  background(bgimage);
  text(mouseX+","+mouseY, mouseX, mouseY);
  drawSprites();
  
}
  
  
    
  


