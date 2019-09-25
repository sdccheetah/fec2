module.exports = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_RELATED_PRODUCTS":
      return action.payload.products;
    default:
      return state;
  }
};
