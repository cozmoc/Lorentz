var x = 0.01;
var y = 0;
var z = 0;
var a = 10;
var b = 28;
var c = 8.0/3.0;
var points = []

function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
}

function draw() {
  background(0);
  var dt = 0.01;
  var dx = (a * (y - x))*dt;
  var dy = (x * (b - z) - y)*dt;
  var dz = (x * y - c * z)*dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  points.push(new createVector(x, y, z));
  translate(width/2, height/2);
  scale(5);
  stroke(255);
  noFill();
  var hu = 0;
  beginShape();
  for (var i = 0; i < points.length; i++) {
    stroke(hu, 255, 255);
    vertex(points[i].x, points[i].y);
    hu += 0.1;
    if (hu > 255) {
      hu = 0;
    }
  }
  endShape();
}