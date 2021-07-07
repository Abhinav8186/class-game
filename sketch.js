var path, car1, car2, car3, car4, car5, i1, i2, i3
var END = 0
var HOME = 1
var PLAY = 2
var gameState = HOME
function preload() {
  bg = loadSound("MARTIN GARRIX.mp3")

  bg = loadAnimation("images/11.png", "images/12.png")
  c1 = loadImage("images/car1.png")
  c2 = loadImage("images/car2.png")
  c3 = loadImage("images/car3.png")
  c4 = loadImage("images/car4.png")
  c5 = loadImage("images/car5.png")
  gameOver = loadImage("images/gameOver.png")
  restart = loadImage("images/RESTART.jpg")
  play = loadImage("images/play.png")
 // bg = loadSound()
}
function setup() {

  createCanvas(1536, 752);

  path = createSprite(770, 380);
  path.addAnimation("road", bg);
  path.velocityY = 35
  path.visible = 0
  car1 = createSprite(900, 600);
  car1.addImage(c2);
  car1.scale = 0.5
  car1.visible = 0
  over = createSprite(800,200);
  over.addImage(gameOver)
  over.visible = 0
  reset = createSprite(800,400)
  reset.addImage(restart)
  reset.visible = 0

  i1 = createSprite(770, 600, 130, 900000)
  i1.visible = 0
  i2 = createSprite(130, 600, 130, 900000)
  i2.visible = 0
  i3 = createSprite(1410, 600, 130, 900000)
  i3.visible = 0
  btn1 = createSprite(750, 400)
  btn1.addImage(play)


}
function draw() {
  if (gameState === HOME) {
    background("lightgreen")
    textSize(50)
    fill("black")
    text("TRAFFIC RACER", 540, 50)
    textSize(30)
    text("⬇ INSTRUCTIONS ⬇", 630, 100)
    text("Press left arrow to go left & right arrow to go right", 430, 150)
    text("Click on play button", 630, 200)
    if (mousePressedOver(btn1)) {
      gameState = PLAY;
    }

  } else if (gameState === PLAY) {
    car1.collide(i1)
    car1.collide(i2)
    car1.collide(i3)

    car1.visible = 1
    path.visible = 1
    btn1.visible = 0
    if (frameCount % 100 == 0) {
      spawncar2();

    }
    if (frameCount % 200 == 0) {
      spawncar3();

    }
    if (path.y > 900) {
      path.y = 50
    }
    if (keyDown("right")) {
      car1.x = car1.x + 9
    } else if (keyDown("left")) {
      car1.x = car1.x - 9
    }
    if(car1.isTouching(car2)){
       gameState = END
    }
    
  }else if(gameState === END){
     gameOver.visible = 1
     restart.visible = 1
  }


  drawSprites()
}
function spawncar2() {
  car2 = createSprite(random(100, 500), 50, 10, 10);
  car2.addImage(c1);
  car2.scale = 0.7;
  car2.velocityY = 30;
  car2.collide(i2)
  car2.collide(i1)
  car2.collide(i3)

}
function spawncar3() {
  car3 = createSprite(random(700, 1400), 50, 10, 10);
  car3.addImage(c3);
  car3.scale = 0.5;
  car3.velocityY = 10;
  car3.collide(i1)
  car3.collide(i2)
  car3.collide(i3)

}