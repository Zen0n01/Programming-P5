let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(220);
  circle(x,y,50); 
  x+=xspeed; 
  y+=yspeed; 
  if (x>=width-25){
    xspeed*=-1
  }
  if (x<=0+25){
    xspeed*=-1
  }
  if (y>=height-25){
    yspeed*= -1
  }
  if (y<=0+25){
    yspeed*= -1
  }
}
