const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  

  let lettersInSentence = {}; 
  
  for (let letters of sentence) { 
    console.log(lettersInSentence);
    if (letters !== " ") { 
      if (letters in lettersInSentence) { 
      lettersInSentence[letters] += 1; 
    } else {
      lettersInSentence[letters] = 1;
    }  
    } 
    
  }
  return lettersInSentence;
};

countLetters("lighthouse in the house")
arr = countLetters("lighthouse in the house");
assertEqual(arr);
