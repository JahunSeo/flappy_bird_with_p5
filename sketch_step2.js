// video 2:38 ~ "the bird falls down, when player is doing nothing."
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

  // with update method, now we have a function that's going to push that bird down.
  this.update = function() {
    this.velocity += this.gravity
    this.y += this.velocity
  }
}
