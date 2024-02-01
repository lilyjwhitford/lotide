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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { // check if the current element in source is NOT in itemsToRemove
      result.push(source[i]); // if not present, add it to the result new array
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]); // => [2, 3]

without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);