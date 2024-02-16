# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lilywhitford/lotide`

**Require it:**

`const _ = require('@lilywhitford/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Compares two arrays, printing out a pass/fail message to the console.
* `assertEqual(actual, expected)`: Compares two primitive types, printing out a pass/fail message to the console.
* `assertObjectsEqual(actual, expected)`: Compares two obejcts, printing out a pass/fail message to the console.
* `countLetters(sentence)`: Returns a count of each letter from a string.
* `countOnly(allItems, itemsToCount)`: Returns counts for a specific subset from a collection of items. 
* `eqArrays(arr1, arr2)`: Compares two arrays for a perfect match.
* `eqObjects(object1, object2)`: Returns true or false based on a perfect match from two objects.
* `findKey(object, callback)`: Scans an object and returns the first key.
* `findKeyByValue(object, value)`: Returns the first key which contains the given value from an object.
* `flatten(array)`: Returns a singular array from a nested array.
* `head(array)`: Retrieves the first element from an array.
* `letterPositions(sentence)`: Returns all indices in a string where each character is found.
* `middle(array)`: Returns the middle elements from a given array.
* `tail(array)`: Retrieves every element except the head (first element) of an array.
* `takeUntil(array, callback)`: Returns a slice of an array with elements taken from the beginning.
* `without(source, itemsToRemove)`: Returns a subset of a given array, and removes unwanted elements.