function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(QUARTER_PI);
  square(0, 0, 100);
}