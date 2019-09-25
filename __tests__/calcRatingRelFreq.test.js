const calcRatingRelFreq = require("../store/action-creators/helpers/calcRatingRelFreq.js");

test("calculates the values at each of the object's keys relative to the total of the object's values", () => {
  let ratings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let relFreqRatings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (let i = 0; i < 100; i++) {
    let key = Math.floor(Math.random() * 5) + 1;
    ratings[key]++;
    relFreqRatings[key] = Number((relFreqRatings[key] + 0.01).toFixed(2));
  }
  expect(calcRatingRelFreq(ratings)).toEqual(relFreqRatings);
});
