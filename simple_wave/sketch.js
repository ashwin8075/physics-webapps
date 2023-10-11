// Wave program using p5.js
// User can adjust frequency, wavelength, and amplitude

// TODO:
// - (d) put names for sliders and show the values with units
// - (n) show rulers on x and y axes
// - switch to an equation (and sliders) using wavelength, period
// - show the wave equation: y = sin(2 pi x / lamda − 2 pi t / T + phi)
// - also show v = lambda / T with real-time value for v

let wavelength;     // wavelength of wave
let frequency;      // frequency of wave
let amplitude;      // amplitude of wave
let phase;          // phase angle of wave
let time_now;           // time

let sliderWavelength;   // wavelength slider
let sliderFrequency;    // frequency slider
let sliderAmplitude;    // amplitude slider

function setup() {
  createCanvas(windowWidth*0.95, windowHeight*0.95);

  // set simulation length units in terms of window dimensions
  sim_1m_x = windowWidth / 100;
  sim_1m_y = windowHeight / 100;

  // Set initial values
  wavelength = 100;
  frequency = 0;
  amplitude = 50;
  phase = PI;
  time_now = 0;

  // Create sliders for user input
  //
  // wavelength slider
  sliderWavelength = createSlider(150, 600, wavelength, 10);
  sliderWavelength.position(20, 20);
  wavelengthBox = createInput();
  wavelengthBox.position(180, 20);
  wavelengthBox.size(50);
  wavelengthBox.value(wavelength);
  wavelengthName = createP('Wavelength');
  wavelengthName.position(20, -10);
  //
  // frequency slider
  sliderFrequency = createSlider(0, 10, frequency, 0.1);
  sliderFrequency.position(20, 50);
  frequencyBox = createInput();
  frequencyBox.position(180, 50);
  frequencyBox.size(50);
  frequencyBox.value(frequency);
  frequencyName = createP('Frequency');
  frequencyName.position(20, 20);
  //
  // amplitude slider
  sliderAmplitude = createSlider(0, 100, amplitude, 1);
  sliderAmplitude.position(20, 80);
  amplitudeBox = createInput();
  amplitudeBox.position(180, 80);
  amplitudeBox.size(50);
  amplitudeBox.value(amplitude);
  amplitudeName = createP('Amplitude');
  amplitudeName.position(20, 50);
}

function draw() {
  background(250);

  // draw length-scale bars
  //
  // draw x-axis scale bar
  stroke(128, 0, 0);
  strokeWeight(1);
  scale_left_x = 3*sim_1m_x
  scale_right_x = scale_left_x + 10*sim_1m_x
  scale_y = windowHeight - 10*sim_1m_y
  line(scale_left_x, scale_y, scale_right_x, scale_y);
  line(scale_left_x, scale_y - 1*sim_1m_y, scale_left_x, scale_y + 1*sim_1m_y);
  line(scale_right_x, scale_y - 1*sim_1m_y, scale_right_x, scale_y + 1*sim_1m_y);
  text('10 m', scale_left_x + 2*sim_1m_x, scale_y + 2*sim_1m_y);
  //
  // draw y-axis scale bar
  scale_x = 3*sim_1m_x
  scale_top_y = windowHeight - 25*sim_1m_y
  scale_bottom_y = scale_top_y + 10*sim_1m_y
  line(scale_x, scale_top_y, scale_x, scale_bottom_y);
  line(scale_x - 1*sim_1m_x, scale_top_y, scale_x + 1*sim_1m_x, scale_top_y);
  line(scale_x - 1*sim_1m_x, scale_bottom_y, scale_x + 1*sim_1m_x, scale_bottom_y);
  text('10 m', scale_x + 1*sim_1m_x, scale_top_y + 5*sim_1m_y);

  // Get user input
  wavelength = sliderWavelength.value();
  wavelengthBox.value(wavelength);
  frequency = sliderFrequency.value();
  frequencyBox.value(frequency);
  amplitude = sliderAmplitude.value();
  amplitudeBox.value(amplitude);

  // Draw wave
  noFill();
  stroke(0);
  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = amplitude * sin(2 * PI * (x / wavelength - time_now * frequency) + phase);
    vertex(x, height / 2 + y);
  }
  endShape();

  // Update time
  time_now += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth*0.95, windowHeight*0.95);
  sim_1m_x = windowWidth / 100;
  sim_1m_y = windowHeight / 100;
}
