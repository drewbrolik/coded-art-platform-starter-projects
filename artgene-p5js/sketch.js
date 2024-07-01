/* **** **** ****
* declare global variables
* prohibition docs:
* https://docs.prohibition.art/
**** **** **** */
const hash = window.dna;

// for predictable randomness example only
let exampleRandomValue;



/* **** **** ****
* p5.js functions
**** **** **** */
function setup() {
  
  // set random values for global variables
  exampleRandomValue = rand();

  // traits
  Artgene.evolve("Trait Name 1", "Trait Value 1");
  Artgene.evolve("Trait Name 2", "Trait Value 2");

}

function draw() {

    preview();

    //noLoop();

}

function keyTyped() {
  
  if (key === 's') {
    save('preview.png');
  }
  
}

function windowResized() {
  
}



/* **** **** ****
* non-p5.js functions
**** **** **** */
function doSomethingCustom() {


}