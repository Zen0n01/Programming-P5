// alle "Bordercheck" funktioner kunne have være skrevet smartere hvis jeg brugte ||
let x
let y
let speed=1.5
let a=speed
let b=0
let d=20
let f=150
// "Katte" variabler
let kx
let ky
let kspeed=2
let ka=kspeed
let kb=0
let kd=20
let kf=0
let k1x
let k1y
let k1speed=2
let k1a=k1speed
let k1b=0
let k1d=30
let k2x
let k2y
let k2speed=2
let k2a=k2speed
let k2b=0
let k2d=25


function setup() {
  createCanvas(400, 400);
  x=random(0,width);
  y=random(0,height);
  kx=random(0,width);
  ky=random(0,height);
  k1x=random(0,width);
  k1y=random(0,height);
  k2x=random(0,width);
  k2y=random(0,height);
}

function draw() {
  background(220);
  fill(f)
  x+=speed*a;
  y+=speed*b;
  circle(x,y,d);
  borderCheck();
  fill(kf)
  kx+=kspeed*ka;
  ky+=kspeed*kb;
  circle(kx,ky,kd);
  borderCheck1();
  k1x+=k1speed*k1a;
  k1y+=k1speed*k1b;
  circle(k1x,k1y,k1d);
  borderCheck2();
  k2x+=k2speed*k2a;
  k2y+=k2speed*k2b;
  circle(k2x,k2y,k2d);
  borderCheck3();
  //borderCheck4(); *(kommer forklaring længere nede)
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
// bordercheck 1,2 og 3 tjekker for koalition med kanter for katte
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
function borderCheck2(){
  if (k1x+k1d/2>=width ){
    k1a=-k1speed
    k1b=k1speed
    }
 if (k1x-k1d/2<=0){
  k1a=kspeed
  k1b=-kspeed
  }
 if (k1y+k1d/2>=height ){
   k1a=-k1speed
   k1b=-k1speed
 }
  if (k1y-k1d/2<=0){
    k1a=k1speed
    k1b=k1speed
      }
}
function borderCheck3(){
  if (k2x+k2d/2>=width ){
    k2a=-k2speed
    k2b=k2speed
    }
 if (k2x-k2d/2<=0){
  k2a=k2speed
  k2b=-k2speed
  }
 if (k2y+k2d/2>=height ){
   k2a=-k2speed
   k2b=-k2speed
 }
  if (k2y-k2d/2<=0){
    k2a=k2speed
    k2b=k2speed
      }
}
// her tjekkes for tryk på piletasterne
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
/*
for at tjekke for koalition med katte ville jeg gøre sådan
dog virker dette ikke :-(
function borderCheck4(){
  if ((x+d/2)=(kx+kd/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x-d/2)=(kx+kd/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x-d/2)=(kx-kd/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x+d/2)=(kx-kd/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x+d/2)=(k1x+k1d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x-d/2)=(k1x+k1d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x-d/2)=(k1x-k1d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x+d/2)=(k1x-k1d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x+d/2)=(k2x+k2d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x-d/2)=(k2x+k2d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x-d/2)=(k2x-k2d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
  if ((x+d/2)=(k2x-k2d/2)){
    kspeed=0
    k1speed=0
    k2speed=0
  }
 }
*/

 