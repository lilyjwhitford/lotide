const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1); // create new array starting from second element
  
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); 
assertEqual(tail(words)[0], "Lighthouse");

const empty = [];
const emptyResult = tail(empty);
assertEqual(emptyResult.length, 0); 

const example = ["Hi"];
const exampleResult = tail(example);
assertEqual(exampleResult.length, 0); 