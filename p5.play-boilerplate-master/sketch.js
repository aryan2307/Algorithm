var a, b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 100, 50, 50);
  b=createSprite(400,300,50,50);
}

function draw() {
  background("blue");  
  drawSprites();
  a.y=mouseY;
  a.x=mouseX;
  if(a.x - b.x < a.width/2 + b.width/2
    &&b.x-a.x < a.width/2 + b.width/2
    &&a.y-b.y < a.height/2 + b.height/2
    &&b.y-a.y < a.height/2 + b.height/2){
    a.shapeColor="red";
  }
  else{
    a.shapeColor="yellow";
  }
}