function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  for (let angle = 0; angle < PI; angle += TWO_PI / 6) {
    push();
    rotate(angle);
    ellipse(0, 0, 100, 320);
    pop();
  }
}
