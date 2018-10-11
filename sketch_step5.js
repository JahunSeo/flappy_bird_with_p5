// video 8:11 ~ "now we add pipes that come from the right of the screen and player have to steer your way through."

// "sketch.js" from the video
var bird
var pipes = []

function setup() {
  createCanvas(400, 600)
  bird = new Bird()
  pipes.push(new Pipe())
}

function draw() {
  background(0, 0, 0)
  bird.update()
  bird.show()

  for (var i = 0; i < pipes.length; i++) {
    // in this script, technically we can have a pipe with no space in it. if there is more than one pipe.
    pipes[i].show()
    pipes[i].update()
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up()
  }
}

// separate file named 'bird.js' from the video
function Bird() {
  this.y = height / 2
  this.x = 25

  this.gravity = 0.6
  this.lift = -15
  this.velocity = 0

  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 32, 32)
  }

  this.up = function() {
    this.velocity += this.lift
  }

  this.update = function() {
    this.velocity += this.gravity
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

// separate file named 'pipe.js' from the video
// you could take different way,
// like picking a random empth amount of space and then picking a random starting point for that empty amount of space.
function Pipe() {
  this.top = random(height / 2)
  this.bottom = random(height / 2)
  this.x = width
  this.w = 20
  this.speed = 5

  this.show = function() {
    fill(255)
    rect(this.x, 0, this.w, this.top)
    rect(this.x, height - this.bottom, this.w, this.bottom)
  }

  this.update = function() {
    this.x -= this.speed
  }
}
