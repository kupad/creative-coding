
let x = 0; //loop counter

let img;
function setup() {
    createCanvas(300, 300);
  img = createImg("https://static.wikia.nocookie.net/finalfantasy/images/0/0f/Aspidochelon-ffvi-ios.png/revision/latest/scale-to-width-down/128?cb=20140711225704",'');
  img.hide();
  frameRate(20);
}

function draw() {

  if(x % 3 == 0) {
    background('red');
  } else {
    background('green');
  }
  fill(255);
  let s = width - x %(275+width);
  textSize(16);
  text("Cracked by Kupad. Thanks to all the c0d3rs @ RC", s, 290);
  image(img, 100, 100);  
  x++;
}

