function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 0);
  stroke(255);
  strokeWeight(4);
  noFill();
 
  if (mouseX >= 150 && mouseX <= 250 && mouseY >= 150 && mouseY <= 250) {
    fill(0,255,255)
    stroke(0,0,0)
    rect(150, 150, 100, 100);
  }

  if(mouseX >= 250 && mouseX <= 350 && mouseY >= 150 && mouseY <= 250){
    fill(0,255,0)
    ellipse(300, 200, 100, 100);
}

  if (mouseX >=250 && mouseX <= 350 && mouseY >= 50 && mouseY <= 150) {
    fill(255,0,0)
    rect(250, 50, 100, 100);
  }
    
  if (mouseX >= 350 && mouseX <= 450 && mouseY >= 150 && mouseY <= 250) {
    fill(0, 0, 255);
    rect(350, 150, 100, 100);
  }
  if(mouseX >= 250 && mouseX <= 350 && mouseY >= 250 && mouseY <= 350){
    fill(255,0,255)
    rect(250,250,100,100)
  }
    
}

// Colour change, shape change, triangle depending where mouseX or mouseY is
