const axios = require("../../helpers/axiosApi.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/reviews/${id}/list?page=1&count=100000000000000000`)
      .then(({ data }) => {
        dispatch({
          type: "CHANGE_REVIEWS",
          payload: { reviews: data.results }
        });
      })
      .catch(console.error);
  };
};
