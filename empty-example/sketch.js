function setup() {
  // put setup code here

  // Art Canvas - arg1 = width, arg2 = height
  createCanvas(200, 200);

  // Basically a console.log
  print("setup");
}

function draw() {
  // put drawing code here

  // Background Color - RGB
  background(0);

  // Rectangle - arg1 = x, arg2 = y, arg3 = width, arg4 = height
  rect(60, 50, 20, 20);

  // Ellipse - arg1 = x, arg2 = y, arg3 = width, arg4 = height
  ellipse(200, 200, 50, 50);


  // frameCount - A browser variable which shows the amount of frames passed through
  // print(frameCount);
}
