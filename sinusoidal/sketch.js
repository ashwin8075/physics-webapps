// oscillation
let w = 0;
let origin;
let origin1;
let rot = 4;
let A = 5;
let acc;
let dt = 0.4; // this the assumed wait time between draw() calls

function setup() {
  createCanvas(800, 600);
  origin = createVector(400,300);
  origin1 = createVector(400,400);
}

function draw() {
  background(0);
  theta = 2 * PI  * rot * dt;   //angular frequecy
  origin.x = A * sin(theta) + origin.x;   // displacememnt of S.H.M of particle   starts from mean     position along x- axis
  acc = - (theta * theta * origin.x) + origin.x;  // this shows the S.H.M.
  dt = dt + 0.001;
  
  theta1 = 2 * PI  * rot * dt;   //angular frequecy
  origin1.x = -A * cos(theta) + origin1.x;  // displacememnt of S.H.M of particle starts from extreme position along x- axis
  acc = - (theta * theta * origin1.x) + origin1.x;    // this shows the S.H.M.
  dt = dt + 0.001;
  stroke(255);
  strokeWeight(8);
  fill(127);
  circle(origin.x, origin.y, 64);
  circle(origin1.x, origin1.y, 64);
  line(100,200,100,500);
}
