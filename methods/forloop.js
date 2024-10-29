const tileWidth = 10; // 四角形の横幅
const tileHeight = 20; // 四角形の縦幅

function setup() {
  createCanvas(400, 400);
  for (let y = 0; y <= height - tileHeight; y += tileHeight) {
    for (let x = 0; x <= width - tileWidth; x += tileWidth) {
      rect(x, y, tileWidth, tileHeight);
    }
  }
}