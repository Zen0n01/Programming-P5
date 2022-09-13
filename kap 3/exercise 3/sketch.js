function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200);
  if (keyCode===74){
    rect(100,100,200,200)
  }
  else if (keyCode===75){
    circle(mouseX,mouseY,100,100)
  }
}
