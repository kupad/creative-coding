//Jeff Wang & Phil Dreizen
//Koch snowflake

let num_steps = 5; //choose iteration level


function setup() {
  createCanvas(400, 400);
  background(204);
}

function arrow(vec, col) {
  push()
  stroke(col)
  fill(col);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;

  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop()
}

function hat(v, n) { // n = number of steps
  if (n == 0) {
    scale(3)
    strokeWeight(2**num_steps)
    arrow(v, 'red')
    return
  }
  n--

  push()
  scale(1/3.0)
  hat(v, n)
  pop()
  translate(v)

  rotate(-PI/3.0)
  push()
  scale(1/3.0)
  hat(v, n)
  pop()
  translate(v)

  rotate(PI/3.0 * 2.0)
  push()
  scale(1/3.0)
  hat(v, n)
  pop()
  translate(v)

  rotate(-PI/3.0)
  push()
  scale(1/3.0)
  hat(v, n)
  pop()
  translate(v)
}

function draw() {
  background(240);

  let o = createVector(50,100)
  let v = createVector(100, 0)


  translate(o)
  hat(v, num_steps)
  rotate(PI/3.0 * 2.0)
  hat(v, num_steps)
  rotate(PI/3.0 * 2.0)
  hat(v, num_steps)

}
  
