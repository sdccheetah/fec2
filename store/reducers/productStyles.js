module.exports = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_STYLES":
      return action.payload.productStyles;
    default:
      return state;
  }
};
