var mRect,fRect;

function setup() {
  createCanvas(800,400);
 fRect= createSprite(200, 200, 50, 80);
 fRect.shapeColor="green";
 fRect.debug=true;
 mRect= createSprite(600, 200, 80, 30);
 mRect.shapeColor="green";
 mRect.debug=true;

 mRect.velocityX=-4;
 fRect.velocityX=4;
}

function draw() {
  background(0);  

 // mRect.x=mouseX;
 // mRect.y=mouseY;
if(mRect.x-fRect.x<mRect.width/2+fRect.width/2 &&
  fRect.x-mRect.x<mRect.width/2+fRect.width/2 &&
  mRect.y-fRect.y<mRect.height/2+fRect.height/2 &&
  fRect.y-mRect.y<mRect.height/2+fRect.height/2 ){
    mRect.velocityX=mRect.velocityX*(-1);
    fRect.velocityX=fRect.velocityX*(-1);
  }




  
  
  drawSprites();
}