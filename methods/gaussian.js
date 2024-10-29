function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // 画面中央に近いところにランダムな位置を生成
  let x = randomGaussian(width / 2, 10);
  let y = randomGaussian(height / 2, 10);
  fill(255);
  square(x, y, 10);
  // frameCountが600を超えたら画面フリーズ
  if (frameCount > 600) {
    noLoop();
  }
}
