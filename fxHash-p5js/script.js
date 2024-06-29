/* **** **** ****
* declare global variables
* full list of fxhash api functions:
* https://docs.fxhash.xyz/api-overview
**** **** **** */
const hash = $fx.hash;
const iteration = $fx.iteration;

// for predictable randomness example only
let exampleRandomValue;





/* **** **** ****
* p5.js functions
**** **** **** */
function setup() {

  // fxhash predictable randomness
  $fx.rand.reset();
  exampleRandomValue = $fx.rand();

  // Create an object defining the traits
  $fx.features({
    "Trait 1 Name":"Trait 1 Value",
    "Trait 2 Name":"Trait 2 Value"
  });

}

function draw() {

  // tell fxhash to capture preview image here
  if ($fx.isPreview) { $fx.preview(); }

  //noLoop();

}

function keyTyped() {
  
  if (key === 's') {
    save(iteration+'.png');
  }

}

function windowResized() {
  
}






/* **** **** ****
* non-p5.js functions
**** **** **** */
function doSomethingCustom() {

}