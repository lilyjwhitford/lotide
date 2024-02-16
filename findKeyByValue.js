const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// findKeyByValue should scan the object and return the first key, which contains the given value.
// if no key with that given value is found, then it should return undefined.
let findKeyByValue = function (object, value) { // define function that accepts object and value as parameters
  const keys = Object.keys(object); // use Object.keys to create an array of keys from the object
    for (let key of keys) { // loop through the array of keys using a for...of loop
      if (object[key] === value) { // check if the current keys value matched the given value
        return key; // if true, return key
      }
    }
  return undefined; // if false, return undefined
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const hotdogEatingCompetition = {
  Mike: "35",
  Matt: "81",
  Rob: "44",
  Alice: "30",
  Reina: "79"
}

assertEqual(findKeyByValue(hotdogEatingCompetition, "31"), "Alice");
assertEqual(findKeyByValue(hotdogEatingCompetition, "81"), "Matt");

module.exports = findKeyByValue;