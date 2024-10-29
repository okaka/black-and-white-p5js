function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(10);
  background(255);
  translate(width / 2, height / 2);
  const radius = 100; // 半径
  for (let angle = 0; angle <= 360; angle++) {
    const x = radius * cos(angle);
    const y = radius * sin(angle);
    point(x, y);
  }
}
