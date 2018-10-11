// video 0:00 ~ "the bird on the screen"
// "sketch.js" from the video
var bird

function setup() {
  createCanvas(400, 600)
  bird = new Bird()
}

function draw() {
  background(0, 0, 0)
  bird.show()
}

// separate file named 'bird.js' from the video
function Bird() {
  this.y = height / 2
  this.x = 25
  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 32, 32)
  }
}
