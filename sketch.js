var assassin, assassinimg
var elf, elfimg
var enginneer, engineerimg
var paladin, paladinimg
var rogue, rogueimg
var alchemist, alchemistimg
var druid, druidimg
var wizard, wizardimg
var goblin,goblinimg
var bg;
var kill;
var arrowimg;
var bg_music;

var gameState = 1;

var score = 0;

function preload(){
    assassinimg = loadImage("pcs/assassin.gif");
    elfimg = loadImage("pcs/elf.gif");
    engineerimg = loadImage("pcs/engineer.gif");
    paladinimg = loadImage("pcs/paladin.gif");
    rogueimg = loadImage("pcs/rogue.gif");
    alchemistimg = loadImage("pcs/alchemist.gif");
    druidimg = loadImage("pcs/druid.gif")
    wizardimg = loadImage("pcs/wizard.gif");
    goblinimg = loadImage("npcs/goblin.gif");
    bg = loadImage("npcs/background.gif");
    kill = loadSound("kill.mp3");
    arrowimg = loadImage("arrow.png");
    bg_music = loadSound("bg_music.mp3");
}

function setup() {
  createCanvas(1500,800);
  assassin = createSprite(300, 200, 50, 50);
  assassin.addImage(assassinimg);
  assassin.scale = 0.5;  
  elf = createSprite(600, 600, 50, 50);
  elf.addImage(elfimg);
  engineer = createSprite(100, 500, 50, 50);
  engineer.addImage(engineerimg);
  engineer.scale = 0.1;
  paladin = createSprite(100, 200, 50, 50);
  paladin.addImage(paladinimg);
  rogue = createSprite(100, 700, 50, 50);
  rogue.addImage(rogueimg);
  rogue.scale = 0.1;
  alchemist = createSprite(300, 500, 50, 50);
  alchemist.addImage(alchemistimg);
  alchemist.scale = 0.1;
  druid = createSprite(500, 200, 50, 50);
  druid.addImage(druidimg);
  wizard = createSprite(400, 600, 50, 50);
  wizard.addImage(wizardimg);
  wizard.scale = 0.5;
  arrow = createSprite(elf.x,elf.y,100,5);
  arrow.addImage(arrowimg);
  arrow.scale = 0.2;
  goblinGroup = createGroup()
  bg_music.play();
  bg_music.loop();
}



function draw() {
  background(bg);  
  drawSprites();

  textSize(35);
  fill("white");
  textFont("cursive");

  text("Score = "+score,1250,50)

  if(gameState==1){
    goblins();
    if(keyDown("space")){
      arrow.velocityX = 20;
    }
    if(arrow.x>1500){
      arrow.x=elf.x;
      arrow.velocityX = 0;
    }
    elf.y=mouseY;
    arrow.y=elf.y;
    if(goblinGroup.isTouching(arrow)){
      goblinGroup.destroyEach()
      score = score+1;
      kill.play();
    }
  }
}

function goblins(){
  if(frameCount%100==0){
    goblin = createSprite(random(700,1500),-50,50,50)
    goblin.addImage(goblinimg);

    elf.scale = 1.5;

    goblin.velocityY = 10;
    goblin.lifetime = 300;
    goblinGroup.add(goblin);
  }
}