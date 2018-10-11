// video 3:39 ~ "we shoud probably do something where the bird stops when it gets to the bottom of the window."
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

// separate file named 'bird.js' from the video
function Bird() {
  this.y = height / 2
  this.x = 25

  this.gravity = 1 // the gravity is the force causing the velocity of the bird to increase
  this.velocity = 0

  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 32, 32)
  }

  this.update = function() {
    this.velocity += this.gravity
    this.y += this.velocity

    // add this condition
    if (this.y > height) {
      this.y = height
      this.velocity = 0
    }
    // and also add this condition for the top case.
    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
  }
}
