const axios = require("../../helpers/axiosApi.js");

module.exports = id => {
  return dispatch => {
    axios
      .get(`/products/${id}`)
      .then(({ data }) => {
        dispatch({
          type: "CHANGE_CURRENT_PRODUCT",
          payload: { product: data }
        });
      })
      .catch(console.error);
  };
};
