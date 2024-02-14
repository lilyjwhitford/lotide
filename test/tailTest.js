const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words)[0], "Lighthouse");
  });
  it("returns an empty array for no result", () => {
    const empty = [];
    const emptyResult = tail(empty);
    assert.deepEqual(emptyResult.length, 0);
  });
  it("returns an empty array for an array that has <= 1 element", () => {
    const example = ["Hi"];
    const exampleResult = tail(example);
    assert.deepEqual(exampleResult.length, 0);
  });
});
