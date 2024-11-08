let ball = {
    x: 0,
    y: 0,
    diameter: 0,
    xSpeed: 0,
    ySpeed: 0,
    color: null,
    colorChange: 0
  };
  
  let canvasWidth;
  let canvasHeight;
  let bgColor;
  let pulseSpeed = 1; // Speed of pulsing effect
  let colorChangeSpeed = 1; // Speed of color change
  
  function setup() {
    // Random canvas size between 400 and 800 pixels
    canvasWidth = int(random(400, 800));
    canvasHeight = int(random(400, 800));
    createCanvas(canvasWidth, canvasHeight);
  
    // Random background color
    bgColor = color(random(255), random(255), random(255));
    background(bgColor);
  
    // Ball properties
    ball.x = random(width);
    ball.y = random(height);
    ball.diameter = random(30, 80);
    ball.xSpeed = random(2, 6);
    ball.ySpeed = random(2, 6);
    ball.color = color(random(255), random(255), random(255));
    ball.colorChange = random(0.5, 2);
  }
  
  function draw() {
    // Create a trail effect by redrawing the background with slight transparency
    background(bgColor, 20); 
    
    // PULSING EFFECT: Ball diameter fluctuates over time
    ball.diameter += pulseSpeed;
    if (ball.diameter > 80 || ball.diameter < 30) {
      pulseSpeed *= -1; // Reverse pulse direction
    }
  
    // COLOR CHANGING EFFECT: Smooth color transition over time
    ball.color = color(
      (red(ball.color) + colorChangeSpeed) % 255,
      (green(ball.color) + colorChangeSpeed) % 255,
      (blue(ball.color) + colorChangeSpeed) % 255
    );
  
    // Display the ball with updated size and color
    fill(ball.color);
    noStroke();
    ellipse(ball.x, ball.y, ball.diameter);
  
    // Update ball position
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
  
    // Check for collision with edges and reverse direction if needed
    if (ball.x < 0 || ball.x > width) {
      ball.xSpeed *= -1;
    }
    if (ball.y < 0 || ball.y > height) {
      ball.ySpeed *= -1;
    }
  }
  