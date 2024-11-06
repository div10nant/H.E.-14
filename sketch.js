let imgArray = [];
let backgroundColor = [
    "#b2435f",
    "#8179dd",
    "#fb8654",
    "#893457",
    "#7959a3"
    ]
var song;
var button;
var font;

function preload() {
  imgArray[0] = loadImage("assests/bat.png");

  imgArray[1] = loadImage("assests/pumpkin.png");

  imgArray[2] = loadImage("assests/witch.png");

  magic = loadImage("assests/magic.png");

  imgArray[4] = loadImage("assests/candycorn.png");

  song = loadSound("assests/spooky.mp3", loaded);
  
 
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");

  //kitten bat
  var button = createButton("draw bat");
  button.parent("button-holder");
  button.mousePressed(drawKittenbat);

  //pumpkin orange cat
  var button2 = createButton("draw pumpkin");
  button2.parent("button-holder");
  button2.mousePressed(drawOrangeCat);

  //candy corn cat
  var button3 = createButton("draw candy corn");
  button3.parent("button-holder");
  button3.mousePressed(drawCandyCorn);

  //magic
  var button4 = createButton("make magic");
  button4.parent("button-holder4");
  button4.mousePressed(drawMagic);
  button4.size(200, 40);

  //random image generator
  var button5 = createButton("random");
  button5.parent("button-holder");
  button5.mousePressed(randomDraw);

  //song
  button6 = createButton("get spooky");
  button6.parent("button-holder4");
  button6.mousePressed(playSong);
  button6.size(200, 40);

  var button7 = createButton("clear")
  button7.parent("button-holder");
  button7.mousePressed(clearPage)
  
  //button not working properly atm
  //save image
  var button8 = createButton("save image");
  button8.parent("button-holder");
  button8.mousePressed(saveImage);

  //settings
  rectMode(CENTER);
  imageMode(CENTER);
  background("#b2435f");
}

function draw() {}

function drawKittenbat() {
  image(imgArray[0], random(width), random(height), 100, 100);
}

function drawOrangeCat() {
  image(imgArray[1], random(width), random(height), 150, 150);
}

function drawMagic() {
  image(magic, 200, 200, 400, 400);
}

function drawCandyCorn() {
  image(imgArray[4], random(width), random(height), 100, 100);
}

//draw witch cat at cursor
function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imgArray[2], mouseX, mouseY, 100, 100);
    }
  }
}

function randomDraw() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 100, 100);
}

function clearPage() {
  background(random(backgroundColor))
    
}

//to load song
function loaded() {
  console.log("loaded");
}

//song playing
function playSong() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.1);
  }
}
//function not working for some reason
function saveImage() {
  save(canvas, "spookyCats.jpg");
}
