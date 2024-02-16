const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // check if arrays have the same length
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { //loop through and compare individual elements of the arrays
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// define test case
const testMapFunction = () => {
// given
  const inputArray = ["ground", "control", "to", "major", "tom"];
  const expectedOutput = ["g", "c", "t", "m", "t"];
  const callback = word => word[0]; //take the first character of each word
  // when
  const actualOutput = map(inputArray, callback);
  // then
  assertArraysEqual(actualOutput, expectedOutput);
};
 
testMapFunction();

module.exports = map;