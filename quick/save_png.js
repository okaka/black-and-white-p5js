function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  for (let angle = 0; angle < PI; angle += TWO_PI / 36) {
    push();
    rotate(angle + frameCount / 100);
    ellipse(0, 0, 100, 320);
    pop();
  }
}

function keyPressed() {
  if (key == "s" || key == "S") {
    saveCanvas("myFirstSketch", "png");
  }
}
