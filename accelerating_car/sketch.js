let u = 0;
let u1 = 0;
let acc = 0.1;
let back_wheel_center;
let front_wheel_center;
let chassis_origin;
let dt = 1;

function setup() {
  createCanvas(600, 600);
  back_wheel_center = createVector(0,469);
  front_wheel_center = createVector(100,469);
  chassis_origin = createVector(15,400);
}

function draw() {
  background(0);
back_wheel_center.x = u * dt + (acc*dt*dt)/2 + back_wheel_center.x; // this is for back wheel
 front_wheel_center.x = u * dt + (acc*dt*dt)/2 + front_wheel_center.x; // this is for front wheel 
 chassis_origin.x = u * dt + (acc*dt*dt)/2 + chassis_origin.x; // this is for top chasis 

  dt = dt + 0.1;

  stroke(255);
  strokeWeight(8);
  fill(0);
  circle(back_wheel_center.x, back_wheel_center.y, 50);
  circle(front_wheel_center.x,front_wheel_center.y, 50);
  rect(5,495,590,100);
  rect(chassis_origin.x,chassis_origin.y,70,45);
}