// oscillation
let w = 0;
let origin;
let origin1;
let freq = 1/4; // hz i.e. cycles per second
let A = 5;
let acc;
let t = 0.0; // seconds
let DT = 1/60; // seconds // this is the wait between draw() calls (framerate is 60 FPS)

function setup() {
  createCanvas(800, 600);
  origin = createVector(200, 300);
}

function draw() {
  background(0);

  // update the time
  t = t + DT;

  theta = 2 * PI * freq * t;   // angular position
  origin.x = A * sin(theta) + origin.x;   // displacememnt of S.H.M of particle   starts from mean     position along x- axis
  // acc = - (theta * theta * origin.x) + origin.x;  // this shows the S.H.M.
  
  stroke(255);
  strokeWeight(8);
  fill(127);
  circle(origin.x, origin.y, 64);
  line(100, 200, 100, 500);

  // // add springs to the oscillating circles
  // strokeWeight(2);
  // line(100, 200, origin.x, origin.y);
  // line(100, 500, origin1.x, origin1.y);
  // line(origin.x, origin.y, origin1.x, origin1.y);
  // line(100, 200, 100, 500);
  // line(100, 200, origin.x, origin.y);
  // line(100, 500, origin1.x, origin1.y);
  // line(origin.x, origin.y, origin1.x, origin1.y);
  // line(100, 200, 100, 500);
  // line(100, 200, origin.x, origin.y);
  // line(100, 500, origin1.x, origin1.y);
  // line(origin.x, origin.y, origin1.x, origin1.y);
  // line(100, 200, 100, 500);
  // line(100, 200, origin.x, origin.y);
  // line(100, 500, origin1.x, origin1.y);
  // line(origin.x, origin.y, origin1.x, origin1.y);
  // line(100, 200, 100, 500);
  // line(100, 200, origin.x, origin.y);
  // line(100, 500, origin1.x, origin1.y);
}
