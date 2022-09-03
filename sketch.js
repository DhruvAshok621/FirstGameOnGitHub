var box
function setup() {
  createCanvas(500,500);
  box=createSprite(250, 250, 100, 100);
  box.velocityX=8;
  box.velocityY=7;
  edges=createEdgeSprites();
}

function draw(); 
{
  background(30);
  createEdgeSprites();
  box.bounceOff(edges);
drawSprites();
}




