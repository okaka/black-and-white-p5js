function setup() {
  createCanvas(400, 400);
  background(220);
  translate(width / 2 - 50, height / 2 - 50);
  rotate(QUARTER_PI); // <-- 45°回転
  square(0, 0, 100);
}
