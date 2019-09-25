const calcAverageRatings = require("../helpers/calcAverageRatings.js");

test("calculates a weighted average for key-value pairs in an object", () => {
  let ratings = {};
  let avg = 0;
  for (let i = 0; i < 100; i++) {
    let key = Math.floor(Math.random() * 100);
    if (ratings[key] === undefined) {
      ratings[key] = 0;
    }
    ratings[key]++;
    avg += key / 100;
  }
  expect(calcAverageRatings(ratings).toFixed(2)).toEqual(avg.toFixed(2));
});
