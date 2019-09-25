module.exports = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_REVIEWS_META":
      return action.payload.reviewsMeta;
    default:
      return state;
  }
};
