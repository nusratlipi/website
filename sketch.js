var barbie=0;
//The set up function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(125,216,230); //an RGB color for the canvas' background
  //circle
  stroke(130,30,160) // an RGB color for the circle's border
  fill(190,123,50,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,50,20,20); // center of canvas, 20px dia
  strokeWeight(10);
  fill(mouseX,34,69);
  rect(350,250,barbie,barbie);
    barbie = barbie+10;
  stroke(210,145,145);
  line(20,20,400,400);
  triangle(250,barbie,200,250,300,250);

}   





