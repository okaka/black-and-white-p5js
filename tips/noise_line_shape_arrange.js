function setup() {
  createCanvas(400, 400);
  noLoop();
  fill(0);
  noStroke();
  angleMode(DEGREES);
  background(255);

  push();
  translate(10, 0);
  noiseLineShape(120, 200, 4);
  pop();

  push();
  translate(40, 130);
  noiseLineShape(160, 120, 8);
  pop();

  push();
  translate(330, 30);
  rotate(35);
  noiseLineShape(20, 300, 2);
  pop();

  push();
  translate(240, 200);
  rotate(90);
  noiseLineShape(230, 90, 4);
  pop();

  push();
  translate(390, 120);
  rotate(120);
  noiseLineShape(40, 290, 5);
  pop();
}

function noiseLineShape(
  shapeWidth = 400, // 矩形の幅
  shapeHeight = 400, // 矩形の高さ
  step = 10 // 横線の間隔
) {
  for (let y = 0; y <= shapeHeight; y += step) {
    for (let x = 0; x <= shapeWidth; x++) {
      let noiseLevel = 3;
      let noiseScale = random();
      let weight = noiseLevel * noise(noiseScale * x);
      circle(x, y, weight);
    }
  }
}
