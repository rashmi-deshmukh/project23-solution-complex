const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ladderStep1 = new Ladder(50,630,100,320);
    ladderStep2 = new Ladder(150,680,100,220);
    ladderStep3 = new Ladder(250,730,100,120);
    ladderStep4 = new Ladder(350,770,100,40);

    redBlock = new Block(90,350, 25,100)
    blueBlock = new Block(190,520, 25,100)
    greenBlock = new Block(290,620, 25,100)
    yellowBlock = new Block(390,700, 25,100)

    blackBlock= new Block(600,750, 70,70)
    ground = new Ground(400,height,800,20)
}

function draw(){
    background("orange");
    Engine.update(engine);

    fill("red")
    ladderStep1.display();
    redBlock.display();

    fill("blue")
    ladderStep2.display();
    blueBlock.display();

    fill("green")
    ladderStep3.display();
    greenBlock.display();

    fill("yellow")
    ladderStep4.display();
    yellowBlock.display();

    fill("black")
    blackBlock.display();
    
    ground.display();
}