let happyBool = false;
let sadBool = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(244, 241, 234);

  if (happyBool === true) {
    happyFace();
  }
  if (sadBool === true) {
    sadFace();
  }
}

function happyFace() {
  fill(255, 221, 89);
  stroke(0);
  strokeWeight(3);
  circle(200, 200, 240);

  fill(0);
  noStroke();
  circle(150, 170, 20);
  circle(250, 170, 20);

  noFill();
  stroke(0);
  strokeWeight(6);
  arc(200, 200, 120, 100, 0.2, PI - 0.2);
}

function sadFace() {
  fill(120, 180, 255);
  stroke(0);
  strokeWeight(3);
  circle(200, 200, 240);

  fill(0);
  noStroke();
  circle(150, 170, 20);
  circle(250, 170, 20);

  noFill();
  stroke(0);
  strokeWeight(6);
  arc(200, 230, 120, 100, PI + 0.2, TWO_PI - 0.2);
}

function mousePressed() {
  happyBool = true;
  sadBool = false;
}

function keyPressed() {
  sadBool = true;
  happyBool = false;
}