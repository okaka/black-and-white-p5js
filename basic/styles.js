function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  stroke(255);
  strokeWeight(10);
  rect(40, 40, 100, 140);
  noFill();
  triangle(300, 40, 360, 180, 180, 180);
  noStroke();
  fill(0);
  circle(200, 280, 140);
}