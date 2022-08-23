'use strict';

const screenWidth = 280;
const screenHeight = 280;
let predicted_once = false;
let imageMatrix = [];
let model = null;
let strokeWeight = 1;
let drawnDigit = null;
let drawnImage = null;


function getModel() {
    const Http = new XMLHttpRequest();
    const url = 'http://martinkondor-api.herokuapp.com/ai/digit?api_key=0pfAOhvat2B5B2Z8';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}

function setup() {
    createCanvas(screenWidth, screenHeight).parent('board');
    drawnDigit = createGraphics(screenWidth, screenHeight);
    drawnDigit.pixelDensity(1);
    model = getModel();
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
    //drawnImage.resize(8, 8);
    drawnImage.loadPixels();
    
    // Convert image to matrix
    imageMatrix = [];
    
    for (let i = 0; i < screenHeight; i++) {
        let currentRow = [];

        for (let j = 0; j < screenWidth; j++) {
            // Also scale img between 0 - 16
            // since the training set were the "sklearn.datasets.load_digits"
            let d = 16.0 * drawnImage.pixels[screenHeight*i + j] / 255.0;
            currentRow.push(d);
        }

        imageMatrix.push(currentRow);
    }

    console.clear();
    for (let row of imageMatrix)
    console.log(row);
    
    /*
    if (model !== null) {
        document.getElementById('prediction').innerHTML = model.predict(imageMatrix);
    }
    */
}
