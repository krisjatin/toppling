const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
var balloptions={
    restitution:2
}
   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

    object2= Bodies.rectangle(200,350,50,50,balloptions);
World.add(world,object2);
   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,200,20);
    rect(object2.position.x,object2.position.y,50,50);

}
