function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  noiseLineShape();
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