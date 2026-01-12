// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
for (let i = 0; i < arr.length; i++ ){
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i < arr.length - 1; i--) {//check each index
    console.log(arr[i]);//print each array value at given index
  }
}let tacos = ["beef", "chicken", "shrimp"];//assign array to taco variable
printArrayValues(tacos);//function call
  // YOUR CODE ABOVE HERE //


/**
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
return Object.keys(object);
  // YOUR CODE ABOVE HERE //
}



/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let values = [];
  for (let key in object ){
    values.push(object[key]);
  }
return  values;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
for (let key in object) {
  console.log(object[key]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
var count = 0;
for (let key in object) {
  count++;
}
return count;


  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}
for (let i = value.length-1; i>= onabort; i--){
  console.log(values[i]);

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
