const axios = require("../../helpers/axiosApi.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/products/${id}/styles`)
      .then(({ data }) => {
        dispatch({
          type: "CHANGE_PRODUCT_STYLES",
          payload: { productStyles: data.results }
        });
      })
      .catch(console.error);
  };
};
