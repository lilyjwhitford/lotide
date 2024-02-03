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
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); 
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); 
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);