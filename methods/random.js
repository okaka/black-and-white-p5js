function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // ランダムな位置を生成
  let x = random(width);
  let y = random(height);

  fill(255);
  // ランダムな大きさの円を描く
  ellipse(x, y, random(80), random(80));
}