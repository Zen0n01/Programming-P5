let x
let y
let speed=1.5
let a=speed
let b=0
let d=20
// "Katte" variabler
let kx
let ky
let kspeed=2
let ka=kspeed
let kb=0
let kd=20
let kf=150

function setup() {
  createCanvas(400, 400);
  x=random(0,width);
  y=random(0,height);
  kx=random(0,width);
  ky=random(0,height);
}

function draw() {
  background(220);
  fill(250)
  x+=speed*a;
  y+=speed*b;
  circle(x,y,d);
  borderCheck();
  fill(kf)
  kx+=kspeed*ka;
  ky+=kspeed*kb;
  circle(kx,ky,kd)
  borderCheck1();
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
function borderCheck1(){
  if (kx+kd/2>=width ){
    ka=-kspeed
    kb=kspeed
    }
 if (kx-kd/2<=0){
  ka=kspeed
  kb=-kspeed
  }
 if (ky+kd/2>=height ){
   ka=-kspeed
   kb=-kspeed
 }
  if (ky-kd/2<=0){
    ka=kspeed
    kb=kspeed
      }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
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
 
 