var bg , bgimg ;
var cat , catimg1 , catimg2 ;
var mouse , mouseimg1 , mouseimg2 ;
var mouseimg4 , catimg4 ; 



function preload() {
    //load the images here
    bgImg = loadAnimation("C:\Users\hp\Desktop\CLASS20\tomAndJerryTemplate-master\images\garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("C:\Users\hp\Desktop\CLASS20\tomAndJerryTemplate-master\images\cat2.png ,C:\Users\hp\Desktop\CLASS20\tomAndJerryTemplate-master\images\cat3.png");
    mouseimg2 = loadAnimation("C:\Users\hp\Desktop\CLASS20\tomAndJerryTemplate-master\images\mouse2.png , C:\Users\hp\Desktop\CLASS20\tomAndJerryTemplate-master\images\mouse3.png");
    catimg4 = loadAnimation("images/cat4.png");
    mouseimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,600);
    cat.addImage(catimg1);
    mouse = createSprite(600,200);
    mouse.addImage(mouseimg1);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation(catimg4);
        mouse.addAnimation(mouseimg4);
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW){
        mouse.addAnimation("mousingTeasing" , mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

    }

    if (keyCode === RIGHT_ARROW){
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
        cat.velocityX = -2 ;
    }


}
