const letterPositions = function(sentence) {
  
  const results = {}; // create new empty object
   
  for (let i = 0; i < sentence.length; i++) { // iterate through each character in the sentence
    let character = sentence[i]; // get character to current index
    if (character !== " ") { // check if character is not a space
    } if (results[character]) { // determine whether the letter has already been encountered
      results[character].push(i);// if it has, append the current index to the array associated with that letter in your results object
    } else {
      results[character] = [i];// if it hasnt, create a new array and start tracking the indices
    }
      
  }
    
  return results;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(letterPositions("hello").e, [1]);
