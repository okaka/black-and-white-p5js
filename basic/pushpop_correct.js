function setup() {
  createCanvas(400, 400);
  background(0);

  for (let y = 0; y <= width; y += 50) {
    for (let x = 0; x <= height; x += 50) {
      square(x, y, 50);
      push();
      drawRect(x, y);
      pop();
    }
  }
}

function drawRect(x, y) {
  translate(5, 5);
  square(x, y, 40);
  translate(5, 5);
  square(x, y, 30);
}