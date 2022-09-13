function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200);
  if (mouseIsPressed==true){
    if (mouseButton==LEFT){
      rect(100,100,200,200)
    }
    else if (mouseButton==RIGHT){
      circle(200,200,200)
    }
  }
}
