const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var astronaut;

function setup() {
  createCanvas(800,400);
  engine = Engine.crconseate();

  world = engine.world;
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1

  if(keyDown("UP_ARROW")){
    astronout.addAnimation("brushing",brush);
    astronout.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
    if(keyDown("DOWN_ARROW")){
      astronout.addAnimation("gyming",gym);
      astronout.changeAnimation("gyming");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
      if(keyDown("LEFT_ARROW")){
        astronout.addAnimation("eating",eat);
        astronout.changeAnimation("eating");
        astronaut.y=350;
        astronaut.velocityX=0;
        astronaut.velocityY=0;
        }
        if(keyDown("RIGHT_ARROW")){
          astronout.addAnimation("bathing",bath);
          astronout.changeAnimation("bathing");
          astronaut.y=350;
          astronaut.velocityX=0;
          astronaut.velocityY=0;
          }
          if(keyDown("m key")){
            astronout.addAnimation("moveing",move);
            astronout.changeAnimation("moveing");
            astronaut.y=350;
            astronaut.velocityX=0;
            astronaut.velocityY=0;
            }
        }

function draw() {
  background(255,255,255);  
  drawSprites();
}

function preload(){
background=loadImage("Images/iss.png");
sleep=loadAnimation("Images/sleep.png");
brush=loadAnimation("Images/brush.png");
gym=loadAnimation("Images/gym21.png,gym22.png");
eat=loadAnimation("Images/eat1.png,eat2.png");
drink=loadAnimation("Images/drink1.png,drink2.png");
move=loadAnimation("Images/move1.png,move2.png")
}