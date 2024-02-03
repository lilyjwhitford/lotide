const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // assign keys to new variable
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) { // compare number of keys in each object
    return false;
  }
  for (const key of keys1) {// loop through keys, checking for values that are arrays
    if  (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if both values for current key in both object1 and object 2 are arrays
      if (!eqArrays(object1[key], object2[key])) { // and if arrays not equal, according to eqArrays
        return false; // return false if objects are not ===
      }
    } else if (object1[key] !== object2[key]) {
      return false; // return false if primitive values dont match
    }
  }
  return true; // return true if all values ===
};

const assertObjectsEqual = function(actual, expected) {
const inspect = require("util").inspect;  
 if (eqObjects(actual,expected)) {
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
} else {
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
 }
};


const gesture1 = { greeting: "hi!", farewell: "bye!" };
const gesture2 = { farewell: "bye!", greeting: "hi!" };

assertObjectsEqual(gesture1, gesture2);