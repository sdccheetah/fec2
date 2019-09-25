module.exports = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_REVIEWS":
      return action.payload.reviews;
    default:
      return state;
  }
};
