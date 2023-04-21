// Simple Pendulum Simulation

let theta;
let w = 0;
let alphaa = 0;
let bob;
let len;
let origin;
let g = 9.8;
let dt = 0.4; // this the assumed wait time between draw() calls

function setup() {
  createCanvas(600, 600);
  origin = createVector(300, 0);
  theta = PI / 4;
  bob = createVector();
  len = 200;
}

function draw() {
  background(0);

  alphaa = (-1 * g * sin(theta)) / len;
  w = w + alphaa*dt;
  theta = theta + w*dt;
  
  bob.x = len * sin(theta) + origin.x;
  bob.y = len * cos(theta) + origin.y;

  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
