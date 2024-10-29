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
    const x = radius * cos(angle);
    const y = radius * sin(angle);
    circle(x, y, diameterS);
  }
}