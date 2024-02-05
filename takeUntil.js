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

const takeUntil = function(array, callback) {
  let result = []; // initialize empty array
  for (let item of array) { // loop through array
    if (!callback(item)) {
      result.push(item); // if condition is not met/returns falsy, push item into array
    } else {
      break; // break out of loop if condition is met/truthy
    }
  }
  return result;
};
// define test case
const testTakeUntilFunction = () => {
  // given
  const inputArray = [1, 2, 3, 4, 5];
  const condition = num => num > 3;
  const expectedOutput = [1, 2, 3]; // take each number until 3
  // when
  const actualOutput = takeUntil(inputArray, condition);
  // then
  assertArraysEqual(actualOutput, expectedOutput);
};
 
testTakeUntilFunction();
