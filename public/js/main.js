'use strict';
const screenWidth = 250, screenHeight = 250;
let drawnDigit, drawnImage;
let imageMatrix = [];
let model;


function setup() {
    createCanvas(screenWidth, screenHeight).parent('board');
    drawnDigit = createGraphics(screenWidth, screenHeight);
    drawnDigit.pixelDensity(1);
    
    model = new MLPClassifier('relu', 'softmax', layers, weights, bias);
}


function draw() {
    background(0);
    
    // Show drawing
    image(drawnDigit, 0, 0);
    
    // Drawing
    if (mouseIsPressed) {
        drawnDigit.stroke(255);
        drawnDigit.strokeWeight(20);
        drawnDigit.line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    // Predict drawing
    predict();
}

function keyPressed() {
  if (key == ' ') {  // Erase drawing
    drawnDigit.background(0);
  }
}


function predict() {
    drawnImage = drawnDigit.get();
    drawnImage.resize(8, 8);
    drawnImage.loadPixels();
    
    // Convert image to matrix
    imageMatrix = [];
    for (let i = 0; i < 16; i++) {
        imageMatrix.push(drawnImage.pixels[i * 4] / 255);
    }
    imageMatrix = [imageMatrix];
    
    document.getElementById('prediction').innerHTML = model.predict(imageMatrix);
}
