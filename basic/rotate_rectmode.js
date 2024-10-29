function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER); // <-- 追加
  translate(width / 2, height / 2);
  rotate(QUARTER_PI);
  square(0, 0, 100);
}
