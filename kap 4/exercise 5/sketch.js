let rx
let ry
let Goffx
let Goffy
let cx
let cy


function setup() {
  createCanvas(400,400)
}
function draw() {
  Goffx=0
  Goffy=0
  rx=50+Goffx
  ry=50+Goffy
  cx=25+Goffx
  cy=25+Goffy
rect(rx,ry,50,50);
circle(cx,cy,50);
if (keyCode===39){
  Goffx++
  Goffy++
}
}