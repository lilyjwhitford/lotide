const flatten = function(array) {
  let flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const item of array[i]) {
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