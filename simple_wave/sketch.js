// Wave program using p5.js
// User can adjust frequency, wavelength, and amplitude

// TODO:
// - (d) put names for sliders and show the values with units
// - (n) show rulers on x and y axes
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
  createCanvas(600, 600);

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
  background(220);

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
