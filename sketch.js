const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var stand1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(800, 350, 200, 10);

    block1 = new orangeBlock(720, 320, 40, 40);
    block2 = new orangeBlock(760, 320, 40, 40);
    block3 = new orangeBlock(800, 320, 40, 40);
    block4 = new orangeBlock(840, 320, 40, 40);
    block5 = new orangeBlock(880, 320, 40, 40);

    block6 = new pinkBlock(740, 280, 40, 40);
    block7 = new pinkBlock(780, 280, 40, 40);
    block8 = new pinkBlock(820, 280, 40, 40);
    block9 = new pinkBlock(860, 280, 40, 40);

    block10 = new yellowBlock(760, 240, 40, 40);
    block11 = new yellowBlock(800, 240, 40, 40);
    block12 = new yellowBlock(840, 240, 40, 40);

    block13 = new redBlock(780, 200, 40, 40);
    block14 = new redBlock(820, 200, 40, 40);

    block15 = new Block(800, 160, 40, 40);
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    stand1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();

    block15.display();

    text("Drag Hexagon to Position and Release to Launch", 500, 100);
}