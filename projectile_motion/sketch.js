let origin;
let dt = 0.1;
let u = 3;
let g = 4;

function setup() {
  createCanvas(800,600);
  origin = createVector(0,600);
  
}

function draw() {
  background(0);
  
  origin.x = u * dt + origin.x;
  origin.y = -(u * dt) + ( g  * dt * dt) /2 + origin.y; 
  dt = dt + .01;
  
  stroke(255);
  strokeWeight(8);  
  circle(origin.x,origin.y,30);

}