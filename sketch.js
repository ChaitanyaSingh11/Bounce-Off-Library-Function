var fixedRect;
var movingRect;
var gameObject3, gameObject4;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 0, 50, 80);
  movingRect = createSprite(400, 800, 80, 30);
  gameObject3 = createSprite(500, 400, 50, 50);
  gameObject4 = createSprite(1000, 400, 50, 50);
  gameObject4.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
  gameObject3.velocityX = 5;
  gameObject4.velocityX = -5;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  // movingRect.debug = true;
  // fixedRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  // console.log(movingRect.y - fixedRect.y);
  bounceOff(gameObject3, gameObject4);
  bounceOff(movingRect, fixedRect);
  background(0);
  drawSprites();
}