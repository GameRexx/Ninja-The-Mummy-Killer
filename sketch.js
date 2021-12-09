var back,ninja,mummy,bat,wood,gameOver,restart,menu;
var gameState="PLAY";
var gameState="2";
var gameState="1";
var score=0;
var mummyGrp;
var batGrp;
var woodGrp;
var ninjaSGrp;

function preload() {
  
  bg = loadImage("assets/background.jpg");
  
  ninjaw=loadAnimation("ninja 0.png","ninja 1.png","ninja 2.png","ninja 3.png","ninja 4.png","ninja 5.png","ninja 6.png","ninja 7.png");
  
  mummyw=loadAnimation("mummy1.png","mummy2.png");
  
  batw=loadAnimation("bat1.png","bat2.png","bat3.png","bat4.png");
  
  woodw=loadImage("assets/wood.png");
  
  ninjasi=loadImage("ninja star.png");
  
  gameoverw=loadImage("gameover.png");
  
  restartw=loadImage("restart.png");
  
  menuw=loadImage("menu.png");
  
  back2w=loadImage("background2.jpg");
  
  aboutw=loadImage("about.png");
  
  startw=loadImage("start.png");
  
  writtenAboutw=loadImage("writtenabout.jpg");
  
  controlsw=loadImage("controls.png");

  controlsbackw=loadImage("controls.jpg");

  backButtonw=loadImage("back.png");

  clickSound=loadSound("click.mp3");

  deathSound=loadSound("dying sound.mp3");

  ninjaThrowSound=loadSound("ninja throwing.mp3");

  jumpingSound=loadSound("jumping sound.wav");

  killSound=loadSound("kill sound.mp3")
}

function setup() {
  createCanvas(500, 300);
  
 //creating objects and giving functions
  back=createSprite(390,150,20,20);         
  back.addImage(bg);
  back.scale = 0.8;
  back.velocityX = -2;           
  
  ninja=createSprite(40,185,20,20);
  ninja.addAnimation('walk' ,ninjaw);
  ninja.scale = 0.05;

  
  ig=createSprite(250,227,500,20);
  ig.visible=false;
  
  gameOver=createSprite(100,152);
  gameOver.addImage(gameoverw);
  gameOver.scale=0.25;
  
  restart=createSprite(425,133);
  restart.addImage(restartw);
  restart.scale=0.075;
  
  menu=createSprite(425,173);
  menu.addImage(menuw);
  menu.scale=0.072;
  
  back2=createSprite(250,150);
  back2.addImage(back2w);
  back2.scale=0.35;
  
  about=createSprite(375,153);
  about.addImage(aboutw);
  about.scale=0.07;
  
  startB=createSprite(375,90);
  startB.addImage(startw);
  startB.scale=0.072;
  
  writtenabout=createSprite(250,150);
  writtenabout.addImage(writtenAboutw);
  writtenabout.scale=0.35;

  controlsBack=createSprite(250,150);
  controlsBack.addImage(controlsbackw);
  controlsBack.scale=0.35;

  controls=createSprite(375,210);
  controls.addImage(controlsw);
  controls.scale=0.077;

  backButton=createSprite(426,256);
  backButton.addImage(backButtonw);
  backButton.scale=0.072;

  mummyGrp=new Group();
  batGrp=new Group();
  woodGrp=new Group();
  ninjaSGrp=new Group();
  }

function draw() {
  background('light green');
  createEdgeSprites();
  
  if(gameState==="1"){
    writtenabout.visible=false;
    controlsBack.visible=false;
    backButton.visible=false;
    about.visible=true;
    startB.visible=true;
    controls.visible=true;
    back.visible=false;
    gameOver.visible = false;
    restart.visible = false;
    menu.visible = false;
    mummyGrp.destroyEach();
    batGrp.destroyEach();
    woodGrp.destroyEach();
    ninja.visible=false;
    
    if(mousePressedOver(startB)){
      gameState="PLAY";
      frameCount=1;
      clickSound.play();
    }

    if(mousePressedOver(about)){
      gameState="2";
      frameCount=1;
      clickSound.play();
    }

    if(mousePressedOver(controls)){
      gameState="3";
      frameCount=1;
      clickSound.play();
    }

    drawSprites();
  }
  
  if(gameState==="2"){
    writtenabout.visible=true;
    controlsBack.visible=false;
    backButton.visible=true;
    back2.visible=false;
    controls.visible=false;
    startB.visible=false;
    about.visible=false;
    ninja.visible=false;
    back.velocityX=0;
    back.visible=false;
    gameOver.visible=false;
    restart.visible=false;
    menu.visible=false;

if(mousePressedOver(backButton)){
  gameState="1";
  back2.visible=true;
  clickSound.play();
}

drawSprites();

}

if(gameState==="3"){
    writtenabout.visible=false;
    controlsBack.visible=true;
    about.visible=false;
    backButton.visible=true;
    controls.visible=false;
    startB.visible=false;
    back.visible=false;
    gameOver.visible = false;
    restart.visible = false;
    menu.visible = false;
    mummyGrp.destroyEach();
    batGrp.destroyEach();
    woodGrp.destroyEach();
    ninja.visible=false;
    
if(mousePressedOver(backButton)){
      gameState="1";
      back2.visible=true;
      clickSound.play();
  }

  drawSprites();
  }

if(gameState==="PLAY"){
    writtenabout.visible=false;
    gameOver.visible = false;
    restart.visible = false;
    controls.visible=false;
    menu.visible = false;
    back2.visible = false;
    ninja.visible = true;
    back.visible=true;
    startB.visible = false;
    about.visible=false;

    back.velocityX = -3;

    spawnWood();
    spawnBat();
    spawnMummy();
   
    if(keyWentDown("S")){
      shoot();
      ninjaThrowSound.play();
    }

    if(ninja.isTouching(mummyGrp)){           
      writtenabout.visible=false;
      mummyGrp.destroyEach();
      batGrp.destroyEach();
      woodGrp.destroyEach();
      ninja.visible=false;
      back.velocityX=0;
      deathSound.play();
      gameState="END";
      
    }

if(ninjaSGrp.isTouching(mummyGrp)){
  ninjaSGrp.destroyEach();
  mummyGrp.destroyEach();
  killSound.play();
  score = score + 10
  }

  drawSprites();

  push()
 fill("yellow")                
 stroke("black")
 strokeWeight(1)
 textSize(15)
 text("Score: " + score,10,30)
 pop()

}

if(gameState==="END"){
    gameOver.visible = true;
    restart.visible = true;
    ninjaSGrp.destroyEach();
    menu.visible = true;
    controls.visible=false;

   if(mousePressedOver(restart)){
     gameState="PLAY";
     clickSound.play();
     score = 0
   }

   if(mousePressedOver(menu)){
    gameState="1";
    writtenabout.visible=false;
    back2.visible=true;
    clickSound.play();
  }
  drawSprites();
  push()
 fill("yellow")
 stroke("black")
 strokeWeight(1)
 textSize(15)
 text("Score: " + score,10,30)
 pop()
  }
  
 if(back.x < 110) {
    back.x = 220;
  }
  
  if(keyDown("space")&& ninja.y>=185) {
        ninja.velocityY = -6;
        jumpingSound.play();
    }

   ninja.velocityY=ninja.velocityY+0.25;
   ninja.collide(ig);
  
  if(keyWentDown("S")) {
    shoot();
  }

}

function spawnBat(){
if (frameCount % 150 === 0){
  bat=createSprite(0,25,100,100);
  bat.addAnimation('flying' ,batw);
  bat.scale = 0.029;
  bat.velocityX=2;
  batGrp.add (bat);
}
}

function spawnMummy(){
  if (frameCount % 35 === 0){
  mummy=createSprite(510,185,20,20);
  mummy.addAnimation('walk' ,mummyw);
  mummy.scale = 0.055;
  mummy.velocityX= -15;
  mummyGrp.add (mummy);
}
}

function spawnWood(){
  if (frameCount % 250 === 0){
  wood=createSprite(780,204);
  wood.addImage(woodw);
  wood.scale=0.07;
  wood.velocityX=-3;
  woodGrp.add (wood);
}
}

function shoot(){
  ninjaS=createSprite(40,185,20,20);
  ninjaS.addImage(ninjasi);
  ninjaS.scale = 0.03;
  ninjaS.velocityX= 3;
  ninjaSGrp.add (ninjaS);
}