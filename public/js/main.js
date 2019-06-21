'use strict';
const screenWidth = 200, screenHeight = 200;
let imageMatrix = [];
let predicted_once = false;
let strokeWeight = 23;
let drawnDigit, drawnImage;
let model;


function setup() {
    createCanvas(screenWidth, screenHeight).parent('board');
    drawnDigit = createGraphics(screenWidth, screenHeight);
    drawnDigit.pixelDensity(1);
    model = new MLPClassifier('relu', 'softmax', layers, weights, bias);
}


function draw() {
    background(0);
    image(drawnDigit, 0, 0);  // Show drawing
    
    if (mouseIsPressed) {  // Draw on pressing mouse
        drawnDigit.stroke(255);
        drawnDigit.strokeWeight(strokeWeight);
        drawnDigit.line(mouseX, mouseY, pmouseX, pmouseY);
        predicted_once = false;
    } else if (!predicted_once) {  // Predict drawing only once after releasing the mouse
        predict();
        predicted_once = true;
    }
}

function keyPressed() {
  if (key === ' ') {  // Erase drawing
    drawnDigit.background(0);
  }
}

function predict() {
    drawnImage = drawnDigit.get();
    drawnImage.resize(8, 8);
    drawnImage.loadPixels();
    
    // Convert image to matrix
    imageMatrix = [];
    for (let i = 0; i < 64; i++) {
        // Also scale img between 0 - 16
        // since the training set were the "sklearn.datasets.load_digits"
        imageMatrix.push(drawnImage.pixels[i * 4] / 16);
    }
    
    document.getElementById('prediction').innerHTML = model.predict(imageMatrix);
}
