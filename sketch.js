function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 500, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  fortnite=createSprite(400,290,50,80)
  amongus=createSprite(400,500,50,80)
fortnite.velocityY=3
amongus.velocityY=-3
}

function draw() {
  background(255,255,255);  
  bounceOff(fortnite,amongus)
  drawSprites();
}
