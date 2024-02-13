const assertEqual = require("../assertEqual");
const tail = require("../tail");


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); 
assertEqual(tail(words)[0], "Lighthouse");

const empty = [];
const emptyResult = tail(empty);
assertEqual(emptyResult.length, 0); 

const example = ["Hi"];
const exampleResult = tail(example);
assertEqual(exampleResult.length, 0); 