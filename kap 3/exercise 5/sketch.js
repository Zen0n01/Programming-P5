function setup() {
  createCanvas(400, 400);
  
}
let x=-25
let y=-25
function draw() {
  background(200);
x++
y++
circle(x,y,50)
setTimeout(500)
if (x>425){
  x=-25
}
if (y>425){
  y=-25
}
}
