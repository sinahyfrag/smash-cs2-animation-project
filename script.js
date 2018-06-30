// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Sinahy");
  ballX = width / 2;
  ballY = height / 2;
  ballRadius = 40;
  ballXVelocity = 10;
  ballGrowth = 10;
}


function draw() {
  drawBall();

}

function drawBall() {
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
  }
  var circumference = getCircumference(); // local variable
  if(circumference >= 600 || circumference <= 160) {
    ballGrowth *= -1;
  }
  ballX += ballXVelocity;
  var ballDiameter = ballRadius * 2; 
  fill("white");
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
  return 2 * PI * ballRadius;
}

function drawSquares(num) {
  while(num > 0) {
    var randomX = random(-.5);
    var randomY = random(-.5); 
    var randomLength = random(20, 80); 
    var randomRed = random(255); 
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
    num--;
  }
}
function drawSquaresAlt(num) {
  for(var i = 0; i < num; i++) {
    var randomX = random(-.5); 
    var randomY = random(-.5); 
    var randomLength = random(20, 80); 
    var randomRed = random(255);
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
  }
    angular.module('myApp', [])
.controller('MainCtrl', function($scope) {
  $scope.boxClass = true;
});
    
}