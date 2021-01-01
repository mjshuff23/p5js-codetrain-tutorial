function setup() {
  // Art Canvas(width, height) - You should always set this, but if you don't, p5 will provide one
  //  for you!
  createCanvas(200, 200);

  // Basically a console.log
  print("setup");
}

function draw() {
  // Background Color - RGB
  // background(0);

  // Rectangle(x, y, width, height)
  rect(60, 50, 20, 20);

  // Ellipse(x, y, width, height)
  ellipse(200, 200, 50, 50);

  // Line(x1, y1, x2, y2)
  line(100, 100, 20, 10);

  // frameCount - A browser variable which shows the amount of frames passed through
  // print(frameCount);
}
