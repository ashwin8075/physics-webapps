// Wave program using p5.js
// User can adjust frequency, wavelength, and amplitude

// TODO:
// - (d) put names for sliders and show the values with units
// - (d) show rulers on x and y axes
// - switch to an equation (and sliders) using wavelength, timeperiod
// - show the wave equation: y = sin(2 pi x / lamda − 2 pi t / T + phi)
// - also show v = lambda / T with real-time value for v

function setup() {
  createCanvas(windowWidth*0.95, windowHeight*0.95);

  // set simulation length units in terms of window dimensions
  sim_1m_x = windowWidth / 100;
  sim_1m_y = windowHeight / 100;
  sim_time_step_secs = 1/60;

  // Set initial values
  wavelength = 20; // m | [2, 100]
  timeperiod = 2; // s | [0.1, 5]
  amplitude = 5; // m | [0, 10]
  phase = PI;
  time_now = 0;

  // Create sliders for user input
  //
  // wavelength slider
  sliderWavelength = createSlider(2, 100, wavelength, 1);
  sliderWavelength.position(20, 20);
  wavelengthBox = createInput();
  wavelengthBox.position(180, 20);
  wavelengthBox.size(50);
  wavelengthBox.value(wavelength);
  wavelengthName = createP('Wavelength L (m)');
  wavelengthName.position(20, -10);
  //
  // timeperiod slider
  sliderTimeperiod = createSlider(0.1, 5, timeperiod, 0.1);
  sliderTimeperiod.position(20, 50);
  timeperiodBox = createInput();
  timeperiodBox.position(180, 50);
  timeperiodBox.size(50);
  timeperiodBox.value(timeperiod);
  timeperiodName = createP('Time-period T (s)');
  timeperiodName.position(20, 20);
  //
  // amplitude slider
  sliderAmplitude = createSlider(0, 10, amplitude, 1);
  sliderAmplitude.position(20, 80);
  amplitudeBox = createInput();
  amplitudeBox.position(180, 80);
  amplitudeBox.size(50);
  amplitudeBox.value(amplitude);
  amplitudeName = createP('Amplitude A (m)');
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
  scale_y = height - 5*sim_1m_y
  line(scale_left_x, scale_y, scale_right_x, scale_y);
  line(scale_left_x, scale_y - 1*sim_1m_y, scale_left_x, scale_y + 1*sim_1m_y);
  line(scale_right_x, scale_y - 1*sim_1m_y, scale_right_x, scale_y + 1*sim_1m_y);
  text('10 m', scale_left_x + 2*sim_1m_x, scale_y + 2*sim_1m_y);
  //
  // draw y-axis scale bar
  scale_x = 3*sim_1m_x
  scale_top_y = height - 20*sim_1m_y
  scale_bottom_y = scale_top_y + 10*sim_1m_y
  line(scale_x, scale_top_y, scale_x, scale_bottom_y);
  line(scale_x - 1*sim_1m_x, scale_top_y, scale_x + 1*sim_1m_x, scale_top_y);
  line(scale_x - 1*sim_1m_x, scale_bottom_y, scale_x + 1*sim_1m_x, scale_bottom_y);
  text('10 m', scale_x + 1*sim_1m_x, scale_top_y + 5*sim_1m_y);

  // Get user input
  wavelength = sliderWavelength.value();
  wavelengthBox.value(wavelength);
  amplitude = sliderAmplitude.value();
  amplitudeBox.value(amplitude);
  timeperiod = sliderTimeperiod.value();
  timeperiodBox.value(timeperiod);

  // draw moving sine wave with user input of wavelength, frequency, and amplitude
  noFill();
  stroke(0);
  beginShape();
  width_sim = width / sim_1m_x;
  for (let x = 0; x <= width_sim; x += width_sim/500) {
    y = amplitude * sin(2 * PI * (x / wavelength - time_now / timeperiod) + phase);
    x_pixels = x * sim_1m_x;
    y_pixels = y * sim_1m_y;
    vertex(x_pixels, height / 2 + y_pixels);
  }


  // for (let x = 0; x <= width; x += 0.5*sim_1m_x) {
  //   y = amplitude * sin(2 * PI * (x / wavelength - time_now / timeperiod) + phase);
  //   vertex(x, height / 2 + y);
  // }
  endShape();
  
  // Update time
  time_now += sim_time_step_secs;
}

function windowResized() {
  resizeCanvas(windowWidth*0.95, windowHeight*0.95);
  sim_1m_x = windowWidth / 100;
  sim_1m_y = windowHeight / 100;
}
