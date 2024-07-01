/* **** **** ****
* declare global variables
* highlight docs:
* https://github.com/highlightxyz/generative-art
**** **** **** */
const hash = hl.tx.hash;
const tokenId = hl.tx.tokenId;

// for predictable randomness example only
let exampleRandomValue;





/* **** **** ****
* p5.js functions
**** **** **** */
function setup() {

  // highlight predictable randomness
  exampleRandomValue = hl.random(0, 1);

  // Traits, title, and description
  let traits = {};
  traits["Trait Name 1"] = "Trait Value 1";
  traits["Trait Name 2"] = "Trait Value 2";

  //console.log(traits);
  hl.token.setTraits(traits);

  // Also set a name and description for this token
  hl.token.setName(`Collection Name #${hl.tx.tokenId}`);
  hl.token.setDescription(
      ``
  );

}

function draw() {

  // tell highlight to capture preview image here
  if (hl.context.previewMode) { hl.token.capturePreview(); }

  //noLoop();

}

function keyTyped() {
  
  if (key === 's') {
    save(tokenId+'.png');
  }

}

function windowResized() {
  
}






/* **** **** ****
* non-p5.js functions
**** **** **** */
function doSomethingCustom() {

}