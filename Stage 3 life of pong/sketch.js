

var you;
var badGroup;
var goodGroup;



function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
  you= createSprite(displayWidth/2, displayHeight/2,10,10);
  goodGroup= new Group();
  badGroup= new Group();
}

function draw(){
    background("black");

    camera.position.x=you.x;
    camera.position.y=you.y;
  

    if(keyDown("up")){
   you.y= you.y-5;
    }

    if(keyDown("down")){
        you.y= you.y+5;
         }
         
    if(keyDown("left")){
            you.x= you.x-5;
             }

    if(keyDown("right")){
                you.x= you.x+5;
                 }

   if(goodGroup.isTouching(you)){
    goodGroup.destroyEach();
    you.scale=you.scale*1.2;
   }
   if(badGroup.isTouching(you)){
     you.x=displayWidth/2;
     you.y=displayHeight/2;
       }

   if(you.scale>=6.2){
     badGroup.setLifetimeEach(0);
     goodGroup.setLifetimeEach(0);
   }
    

console.log(you.scale);

spawnBad(); 
spawnGood();  

    drawSprites(); 
}

function spawnBad(){
  if(frameCount% 60 === 0){
    var bads = createSprite(random(50,displayWidth-50),0,20,20)
    bads.velocityY = 1.5;
    badGroup.add(bads);
  }
}

function spawnGood(){
  if(frameCount% 60 === 0){
    var goods = createSprite(random(50,displayWidth),-10,50,50)
    goods.velocityY = 1.5;
    goodGroup.add(goods);
  }
}
