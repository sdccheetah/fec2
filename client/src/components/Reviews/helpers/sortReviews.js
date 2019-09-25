const sortCriteria = require("../../../../../helpers/sortCriteria.js");

module.exports = reviews => {
  let weightedAvgs = {};
  let sortedByDate = reviews.slice().sort((a, b) => {
    return new Date(a.date) > new Date(b.date) ? -1 : 1;
  });
  let sortedByHelpfulness = reviews.slice().sort(sortCriteria("helpfulness"));
  sortedByDate.forEach((review, ri) => {
    weightedAvgs[review.review_id] = { review, position: 0.5 * ri };
  });
  sortedByHelpfulness.forEach((review, ri) => {
    weightedAvgs[review.review_id].position += review.helpfulness;
  });
  let sortedByRelevance = Object.values(weightedAvgs).sort(
    sortCriteria("position")
  );
  return {
    relevance: sortedByRelevance.map(item => item.review),
    helpfulness: sortedByHelpfulness,
    newest: sortedByDate
  };
};
