function setup() {
  createCanvas(400, 400);
  background(255);
  const count = 4; // 行・列ごとの四角形の数
  const squareSpace = 10; // 四角形の間のスペース
  const offset = squareSpace * 3;
  const squareSize = (width - offset * 2 - squareSpace * (count - 1)) / count;

  for (let x = offset; x < width - squareSize; x += squareSpace + squareSize) {
    for (
      let y = offset;
      y < height - squareSize;
      y += squareSpace + squareSize
    ) {
      push();
      translate(x, y);
      const dotSpace = random(3, 6); // ドット間隔
      const dotSize = random(1, 4); // ドットサイズ
      dotFill(dotSpace, dotSize, squareSize);
      pop();
    }
  }
}

function dotFill(space, size, outerSize) {
  const center = outerSize / 2;
  for (let x = size / 2; x < outerSize - size / 2; x += space) {
    for (let y = size / 2; y < outerSize - size / 2; y += space) {
      strokeWeight(size);
      point(x, y);
    }
  }
}
function keyPressed() {
  if (key == "s" || key == "S") {
    saveCanvas("myFirstSketch", "png");
  }
}
