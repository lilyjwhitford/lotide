const flatten = function(array) {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) { // iterate over the array and check if each element is an array
    if (Array.isArray(array[i])) {
      for (const item of array[i]) { // if it is, used another for loop to iterate over the nested array and push each element to flattenedArray
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;