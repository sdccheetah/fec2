const product1 = {
  id: 1,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  description:
    "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  category: "Jackets",
  default_price: "140"
};
module.exports = (state = product1, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_PRODUCT":
      return action.payload.product;
    default:
      return state;
  }
};
