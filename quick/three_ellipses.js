function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  ellipse(0, 0, 100, 320);
  rotate(TWO_PI / 6);
  ellipse(0, 0, 100, 320);
  rotate(TWO_PI / 6);
  ellipse(0, 0, 100, 320);
}
