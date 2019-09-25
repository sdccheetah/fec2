const axios = require("../../helpers/axiosApi.js");
const calcAverageRatings = require("../../helpers/calcAverageRatings.js");
const calcRatingRelFreq = require("./helpers/calcRatingRelFreq.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/reviews/${id}/meta`)
      .then(({ data }) => {
        let reviewsMeta = data;
        reviewsMeta.avgRating = calcAverageRatings(data.ratings);
        reviewsMeta.ratingRelFreq = calcRatingRelFreq(data.ratings);
        dispatch({
          type: "CHANGE_REVIEWS_META",
          payload: { reviewsMeta }
        });
      })
      .catch(console.error);
  };
};
