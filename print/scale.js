function setup() {
  createCanvas(1000, 1000); // <-- 400から1000に変更
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  scale(1000/400); // <-- scale()を追加
  for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 36) {
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
