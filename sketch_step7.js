// video 13:26 ~ "get rid of pipes when offscreen"

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
function Pipe(num) {
  this.num = num
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

  this.offscreen = function() {
    // return this.x < -this.w
    if (this.x < -this.w) {
      return true
    } else {
      return false
    }
  }
}
