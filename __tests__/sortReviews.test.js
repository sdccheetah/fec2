const sortReviews = require("../client/src/components/Reviews/helpers/sortReviews.js");

test("returns an object containing arrays of reviews, sorted by different measures", () => {
  let a = { review_id: 0, helpfulness: 5, date: "2019-04-02" };
  let b = { review_id: 1, helpfulness: 3, date: "2019-04-04" };
  let c = { review_id: 2, helpfulness: 4, date: "2019-04-03" };
  let d = { review_id: 3, helpfulness: 4, date: "2019-04-04" };
  let arr = [a, b, c, d];
  let sorted = sortReviews(arr);
  expect(sorted.helpfulness).toEqual([a, c, d, b]);
  expect(sorted.newest[3]).toEqual(a);
  expect(sorted.relevance).toEqual([a, c, d, b]);
});
