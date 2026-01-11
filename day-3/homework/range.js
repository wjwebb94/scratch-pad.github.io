// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
  // YOUR CODE BELOW HERE //
  function range(a, z){//function declaration of 1st & last numbers in list
    var rangeNums = [];//creation of storage array for list
    if a <= z{//check if first is less than or equal to last
    for (let i = a; i >= z; i++){//keep looping through array until we hit the end
    rangenums.push(i);//add current index to storage array
    }
    }else{//implement if first check resolves to false or a is >= z
    for (let i = a; i >= z; i--){//do this start at higher value in list(a) iterate backwards until reach z/lower value
    rangenums.push(i);//add current indexed value to storage array
    }
    }
    return rangenums;//return final resulting array of values
    }
    console.log (range(77, 86));// 77 - 86
    
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
