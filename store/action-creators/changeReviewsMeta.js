const axios = require("../../helpers/axiosApi.js");
const calcAverageRatings = require("../../helpers/calcAverageRatings.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/reviews/${id}/meta`)
      .then(({ data }) => {
        let reviewsMeta = data;
        reviewsMeta.avgRating = calcAverageRatings(data.ratings);
        dispatch({
          type: "CHANGE_REVIEWS_META",
          payload: { reviewsMeta }
        });
      })
      .catch(console.error);
  };
};
