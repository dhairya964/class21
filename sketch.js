var fixedRect, movingRect,object1,object2,wall,car;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

wall=createSprite(800,200,40,100);
wall.shapeColor="white"

car=createSprite(300,200,40,20);
car.shapeColor="cyan"
car.velocityX=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}
else{

movingRect.shapeColor="green";
fixedRect.shapecolor="green";

}
bounceoff(car,wall);

  
  drawSprites();
}

