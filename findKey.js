const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) { // define function that takes in an object and a callback
  for (let key in object) { // loop through object using for...in loop
    if (callback(object[key])) { // pass the value associated with eash key to the callback
      return key; // if callback returns truthy, return key for first item
    }
  }
  return undefined; // if no truthy key is found, return undefined
};

const testFindKeyFunction = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(testFindKeyFunction, x => x.stars === 2), "noma"); // => should return "noma"