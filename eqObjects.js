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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // assign keys to new variable
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) { // compare number of keys in each object
    return false;
  }
  for (const key of keys1) {// loop through keys, checking for values that are arrays
    if  (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false; // return false if arrays dont ===
      }
    } else if (object1[key] !== object2[key]) {
      return false; // return false if primitive values dont match
    }
  }
  return true; // return true if all values ===
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("Test 3:", eqObjects(cd, dc)); // Expected output: true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("Test 4:", eqObjects(cd, cd2)); // Expected output: false