function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(255);
  translate(width / 2, height / 2);
  const radius = 100; // 大きい円の半径
  const countS = 30; // 小さい円の数
  // 小さい円の直径
  const diameterS = (radius * 2 * PI) / countS;
  // 小さい円ひとつあたりの角度
  const angleS = 360 / countS;

  for (let angle = 0; angle <= 360; angle += angleS) {
    // ランダムに半径を変える
    let r = random(0.5, 1.8);
    const x = radius * r * cos(angle);
    const y = radius * r * sin(angle);
    // ランダムに黒か白で塗りつぶす
    if (round(random())) {
      fill(0);
    } else {
      fill(255);
    }
    line(0, 0, x, y);
    // ランダムに小さい円の直径を変える
    circle(x, y, diameterS * random(0.2, 1.4));
  }
}
