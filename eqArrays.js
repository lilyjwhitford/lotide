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

module.exports = eqArrays;

