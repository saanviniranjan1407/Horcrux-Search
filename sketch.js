const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage;
var voldemortImage, voldemort;
var dementorImage, dementor;
var harry, harryImage;

var score = 0;

function preload(){
  backgroundImage = loadImage('images/Castle2.gif');
  voldemortImage = loadImage('images/Voldemort2.png');
  dementorImage = loadImage('images/Dementor.gif');
  harryImage = loadImage('images/HarryPotter.png');
}

function setup() {
  createCanvas(1350,650);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  voldemort = createSprite(50,315,10,10);
  voldemort.addImage(voldemortImage);
  voldemort.scale = 0.6;

  //harry = new Harry(450,325,300,150);

  harry = createSprite(450,325,300,150);
  harry.addImage(harryImage);
  harry.scale = 0.5;

  dementorGroup1 = new Group();
  dementorGroup2 = new Group();
  dementorGroup3 = new Group();
  dementorGroup4 = new Group();
}

function draw() {
  Engine.update(engine); 

  rectMode(CENTER);
  background(backgroundImage);

  harry.y = mouseY;
  //harry.x = mouseX;
  
  harry.display();
  drawSprites(); 

  Dementor1();
  Dementor2();
}

function Dementor1(){
  if(frameCount % 200 === 0){
    dementor = createSprite(1350,50,10,10);
    dementor.addImage(dementorImage);
    dementor.scale = 0.5;
    dementor.velocityX = -(2 + score / 20);
    dementor.y = Math.round(random(20,325));
    dementor.lifetime = 550;
    
    dementorGroup1.add(dementor);    
  }  
}

function Dementor2(){
  if(frameCount % 300 === 0){
    dementor = createSprite(1350,300,10,10);
    dementor.addImage(dementorImage);
    dementor.scale = 0.5;
    dementor.velocityX = -(2 + score / 20);
    dementor.y = Math.round(random(325,630));
    dementor.lifetime = 550;
    
    dementorGroup2.add(dementor);    
  }  
}