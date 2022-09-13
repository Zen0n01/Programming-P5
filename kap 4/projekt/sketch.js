let x
let y
let a
let b
let d
let speed

function setup() {
  createCanvas(400, 400);
  x=random(0,width)
  y=random(0,height)
}

function draw() {
  background(220);
  d=20
  speed=10
  a=speed
  b=0
  circle(x,y,d)
}
function borderCheck(){
  if (x+d/2>=width ){
  a=-speed
  b=0
  }
  if (x-d/2<=0){
    a=speed
    b=0
  }
  if (y+d/2>=height ){
    a=0
    b=-speed
    }
    if (y-d/2<=0){
      a=0
      b=speed
    }
}
function keyPressed() {
  if (keyCode === 39) {
    b = speed;
    a = 0;
    x+=speed
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }
 