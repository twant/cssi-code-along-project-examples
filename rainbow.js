// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, colorMode, HSB, width, height, 
          random, background, fill, color, random
          rect, ellipse, stroke, image, loadImage, 
          collideCircleCircle, text, mouseX, mouseY, strokeWeight, line, mouseIsPressed */

let brushHue, priorX, priorY

function setup() {
  // Canvas & color settings
  createCanvas(400, 400)
  colorMode(HSB, 360, 100, 100)
  brushHue = 0
  priorX = 0
  priorY = 0
  background(95)
  strokeWeight(6)
}

function draw() {
  chooseColors()

  if (mouseIsPressed) {  
    // Pick one of the three behaviors below:
    // rect(mouseX, mouseY, 15, 15)
    // ellipse(random(width), random(height), 30, 30)
    line(priorX, priorY, mouseX, mouseY)
    // line(width-priorX, height-priorY, width-mouseX, height-mouseY)
  }

  // Store the mouseX and mouseY from this frame in order to use them next frame - remember from the DVD lesson that the draw loop runs once every frame.
  priorX = mouseX
  priorY = mouseY
}

function chooseColors() {
  brushHue += 1
  if (brushHue > 360) {
    brushHue = 0
  }
  stroke(brushHue, 50, 80)
  fill(brushHue, 50, 80)
}

function keyPressed() {
  background(95)
}