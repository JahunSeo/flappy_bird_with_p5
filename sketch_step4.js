// video 4:39 ~ "when key pressed~"
// you could spend your time tuning the velocity of bird etc, even more.

// "sketch.js" from the video
var bird

function setup() {
  createCanvas(400, 600)
  bird = new Bird()
}

function draw() {
  background(0, 0, 0)
  bird.update()
  bird.show()
}

function keyPressed() {
  if (key == " ") {
    // if the key is the spacebar
    // console.log("SPACEBAR")
    bird.up()
  }
}

// separate file named 'bird.js' from the video
function Bird() {
  this.y = height / 2
  this.x = 25

  // edit gravity
  this.gravity = 0.6
  // and add this.lift
  this.lift = -15
  this.velocity = 0

  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 32, 32)
  }

  this.up = function() {
    this.velocity += this.lift
    console.log(this.velocity)
  }

  this.update = function() {
    this.velocity += this.gravity
    // add some like air resistance in general
    this.velocity *= 0.9
    this.y += this.velocity

    if (this.y > height) {
      this.y = height
      this.velocity = 0
    }
    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
  }
}
