var bubbleX = 0;
var bubbleY= 0;
var x = 0;
var speed = 10;
var directionX = 1;
var directionY = 1;
var angle = 120;
var triX = 0;
var triY = 0;
var bubble0;
var bubble1;
var bubble2;
var bubbles = [];
var rainbowBackground = false;
var  t = "Welcome to Shapes";

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(8, 119, 10);
  colorMode(HSB, 255);
for(var x = 0 ; x < 5; x++){
  bubbles[x] = new Bubble ()
}
}

function draw(){
  if(rainbowBackground == false){
    background(58, 255,255);
  }
  else{
    Rainbow("Jarmone")
  }
  console.log(returingvalue);
  textSize(32);
  text( t , 100, 200);
  fill(0, 20, 200)

  fill(0);
  stroke(0);
  for(var x = 0 ; x < 5; x++){
    ellipse(bubbles[x].x, bubbles[x].y, bubbles[x].diameter);
    bubbles[x].move();
  }
  // ellipse(bubble0.x, bubble0.y, bubble0.diameter);
  // bubble0.move();
  // ellipse(bubble1.x, bubble1.y, bubble1.diameter);
  // bubble1.move();
  // ellipse(bubble)
  // ellipse(mouseX, mouseY, 20, 30);
}

function Bubble(x, y, diameter) {
  this.x = random(windowWidth);
  // random(255);
  this.y = random (windowHeight);
  this.diameter = random(20)+100;
  this.directionX = 1;
  this.directionY = 1;
  this.angle = random(0, 90);
  this.move = function () {
    // this.x += random(10) -5;
    // this.y += random(10) -5;
    this.x+=cos(radians(this.angle))*speed*this.directionX;
    this.y+=sin(radians(this.angle))*speed*this.directionY;
    if (this.x>width) {
      this.directionX= -1
    }
    else if (this.x<0){
      this.directionX= 1;
    }
    if (this.y>height) {
      this.directionY=-1
    }
    else if (this.y < 0){
      this.directionY= 1;
    }
    // else if (this.y<height){
    //   this.y+= 5;
    // }
    //
    // else if (this.x > width){
    //   this.y += 5;
    // }
    // else if (this.x < width){
    //   this.y = -5;
    // }

  }
}

function Rainbow(name){
  for (var i = 0; i < width; i++) {
    stroke(i, width, width);
    line(i, 0, i, height);
  }
  return(name);
}
function Redgreen() {
  for (var i = 0; i < width; i++) {
    stroke(i/3, width, width);
    line(i, 0, i, height);
  }
}


function mousePressed() {
  triX = mouseX;
  triY = mouseY;
  // if (rainbowBackground == true) {
  //   rainbowBackground = false;
  // }
  // else {
  //   rainbowBackground = true;
  // }
rainbowBackground = !rainbowBackground;
}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    ellipse(100, 100, 200, 250);
  }
  else if (keyCode == DOWN_ARROW){
    var x1= triX;
    var y1= triY;
    fill(0);
    triangle (x1, y1, x1 + 100, y1 - 95, x1 + 200, y1)
  }
  else if (keyCode == RIGHT_ARROW){
    Redgreen();
  }
  else if (keyCode == LEFT_ARROW){
    Rainbow();
  }
}

function keyTyped(){
  if (key == "g"){
    background(190, 77, 90);
  }
}

function returingvalue() {
  return(5);
}
