const sortCriteria = require("../helpers/sortCriteria.js");

test("returns a function that may be used as a key-based sorting criteria", () => {
  let a = { k: 5 };
  let b = { k: 4 };
  let arr = [a, b];

  expect(arr.sort(sortCriteria("k"))).toEqual([a, b]);
});
