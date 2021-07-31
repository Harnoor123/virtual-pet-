var dog,happydog,database,foods,foodStock;
var batabase;
var press;
function preload()
{
	//load images here
  dogImg = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(300,250);
  dog.scale =0.3;
  dog.addImage(dogImg);

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  
background("lightgreen");

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happydog);

}


  drawSprites();
  //add styles here
  fill("black");
  stroke("yellow");
  strokeWeight(3);
  textSize(18);
  text("Press UP_ARROW Key To Feed Milk",10,20);
 
  
}


function readStock(data){
  foods=data.val();
}

function writeStock(x){
 if(x<=0){
   x=0;
 } else{
    x = x-1;
   }
 
  database.ref('/').update({
    food:x
  })
}

