const axios = require("../../helpers/axiosApi.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/products/${id}/related`)
      .then(({ data }) => {
        dispatch({
          type: "CHANGE_RELATED_PRODUCTS",
          payload: { products: data }
        });
      })
      .catch(console.error);
  };
};
