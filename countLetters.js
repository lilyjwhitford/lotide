const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {

  let lettersInSentence = {}; // create new empty object
  
  for (let letters of sentence) { // loop through string
    if (letters !== " ") { // be sure to not include spaces
      if (letters in lettersInSentence) { // if letters are present in string,
        lettersInSentence[letters] += 1; // then implement the string by 1
      } else {
        lettersInSentence[letters] = 1;
      }
    }
    
  }
  return lettersInSentence; // return object of letters:string
};

countLetters("lighthouse in the house");
let arr = countLetters("lighthouse in the house");
assertEqual(arr['e'], 3);
