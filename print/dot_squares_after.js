const BASE_SIZE = 1000;
const unit = BASE_SIZE / 400; // BASE_SIZEに追従する数
const squareSpace = 10 * unit; // 四角形の間のスペース
const dotSpaceMin = 3 * unit; // 最小ドット間隔
const dotSpaceMax = 6 * unit; // 最大ドット間隔
const dotSizeMin = 1 * unit; // 最小ドットサイズ
const dotSizeMax = 4 * unit; // 最大ドットサイズ

function setup() {
  createCanvas(BASE_SIZE, BASE_SIZE);
  background(255);
  const count = 4; // 行・列ごとの四角形の数
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
      const dotSpace = random(dotSpaceMin, dotSpaceMax);
      const dotSize = random(dotSizeMin, dotSizeMax);
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
