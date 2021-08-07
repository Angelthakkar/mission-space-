var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto;
var sun,moon,spaceship;
var wire; 
var win,winImg;  
var quiz,score = 0;
var gameState = "one";
function preload() {
   sun1 = loadImage("images/sun.png");
   moon1 = loadImage("images/moon.png");
   mercury1 = loadImage("images/mercury.png");
   venus1 = loadImage("images/venus.png");
   earth1 = loadImage("images/earth.png");
   mars1 = loadImage("images/mars.png");
   jupiter1 = loadImage("images/jupiter.png");
   saturn1 = loadImage("images/saturn.png");
   uranus1 = loadImage("images/uranus.png");
   neptune1 = loadImage("images/neptune.png");
   pluto1 = loadImage("images/pluto.png");
   spaceship1 = loadImage("images/spaceship1.png");
   space1 = loadImage("images/space1.png");
   wire1 = loadImage("images/wire.png");
   galaxy1 = loadImage("images/space4.png");
   winImg = loadImage("images/youWin.png")
  
  
}

function setup() {
  createCanvas(1300,600);
  wire=createSprite(70,250,30,30);
  spaceship=createSprite(600,250,40,40);
  spaceship.addImage(spaceship1)
  spaceship.scale=0.5
  spaceship.setCollider("rectangle",0,0,180,250);
  wire.setCollider("rectangle",0,0,180,180)
  win = createSprite(600,400,20,20);
  win.addImage(winImg)
  win.visible = false;
  win.scale = 1.5;
  win.depth = 2000;

 state1();
 quiz = new Quiz();

}

function draw() {
  background(space1)
 
  
  if(gameState === "one"){
    
    quiz.Clues();
    quiz.display();
    textSize(15);
    fill ("lightblue")
    text("score : "+score, 500,50);
    if( score === 4){
      gameState = "two";
    }
    
  }
  
 
  if (gameState === "two"){
   
    state0();
    gameState = "three";
  }
  
 if (gameState === "three"){
    background(galaxy1);
    wire.destroy();
    state1();
    spaceship.x=1200;
    spaceship.y=500;

    
    
    gameState = "four";
  }

 

 
  if (gameState === "four"){
    background(galaxy1);
    wire.destroy();
    state1();
    spaceship.velocityY=-1.5;
    spaceship.velocityX=-3.5;
    if(spaceship.isTouching(moon)){
      spaceship.destroy();
     win.visible = true;
    }
  
  }
  drawSprites();
 
}