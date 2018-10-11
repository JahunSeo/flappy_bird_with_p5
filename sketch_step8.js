// video 16:07 ~ "when bird hits the pipes"

// "sketch.js" from the video
var bird
var pipes = []
var num = 0

function setup() {
  createCanvas(400, 600)
  bird = new Bird()
  pipes.push(new Pipe(num++))
}

function draw() {
  background(0, 0, 0)
  bird.update()
  bird.show()

  // add this condition statement, to add more pipes on the screen.
  if (frameCount % 40 == 0) {
    pipes.push(new Pipe(num++))
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show()
    pipes[i].update()

    if (pipes[i].hits(bird)) {
      pipes[i].highlight = true
    } else {
      pipes[i].highlight = false
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)
    }
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
  this.x = 100

  this.gravity = 0.6
  this.lift = -15
  this.velocity = 0

  this.show = function() {
    fill(255)
    if (this.highlight) {
      fill(200, 0, 0)
    }
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
function Pipe(num) {
  this.num = num
  this.top = random(height / 2)
  this.bottom = random(height / 2)
  this.x = width
  this.w = 20
  this.speed = 5

  this.highlight = false

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true
      }
    }
    return false
  }

  this.show = function() {
    if (this.highlight) {
      fill(255, 0, 0)
    }
    rect(this.x, 0, this.w, this.top)
    rect(this.x, height - this.bottom, this.w, this.bottom)
  }

  this.update = function() {
    this.x -= this.speed
  }

  this.offscreen = function() {
    // return this.x < -this.w
    if (this.x < -this.w) {
      return true
    } else {
      return false
    }
  }
}
