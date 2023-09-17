// Wave program using p5.js
// User can adjust frequency, wavelength, and amplitude

let wavelength;     // wavelength of wave
let frequency;      // frequency of wave
let amplitude;      // amplitude of wave
let phase;          // phase angle of wave
let time;           // time

let sliderWavelength;   // wavelength slider
let sliderFrequency;    // frequency slider
let sliderAmplitude;    // amplitude slider

function setup() {
  createCanvas(600, 400);

  // Set initial values
  wavelength = 100;
  frequency = 0;
  amplitude = 50;
  phase = PI;
  time = 0;

  // Create sliders for user input
  sliderWavelength = createSlider(150, 600, wavelength, 10);
  sliderWavelength.position(20, 20);
  sliderFrequency = createSlider(0, 10, frequency, 0.1);
  sliderFrequency.position(20, 50);
  sliderAmplitude = createSlider(0, 100, amplitude, 1);
  sliderAmplitude.position(20, 80);
}

function draw() {
  background(220);

  // Get user input from sliders
  wavelength = sliderWavelength.value();
  frequency = sliderFrequency.value();
  amplitude = sliderAmplitude.value();

  // Draw wave
  noFill();
  stroke(0);
  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = amplitude * sin(2 * PI * (x / wavelength - time * frequency) + phase);
    vertex(x,height/2 + y);
  }
  endShape();

  // Update time
  time += 0.01;
}
