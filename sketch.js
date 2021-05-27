const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var displayTime;
var displayColor = "white";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);
    
    Engine.update(engine);

    // write code to display time in correct format here
    fill(displayColor);
    textSize(50);
    text(displayTime, 550, 300);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var request = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    //var request = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //var request = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    //change the data in JSON format
    var response = await request.json();
    var datetime = response.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);
    displayTime = datetime.slice(11,16);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 04 && hour <= 06){
        bg = "sunrise1.png";
        displayColor = "black";
    }else if(hour >= 06 && hour <= 08){
        bg = "sunrise2.png";
        displayColor = "black";
    }else if(hour >= 23 && hour === 0){
        bg = "sunset10.png";
        displayColor = "white";
    }else if(hour === 0 && hour <= 03){
        bg = "sunset11.png";
        displayColor = "white";
    }else{
        bg = "sunset12.png";
        displayColor = "white";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
