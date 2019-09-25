const { connect } = require("react-redux");
const Overview = require("../components/Overview/index.jsx");
const {
  changeCurrentProduct,
  changeRelatedProducts,
  changeReviews,
  changeReviewsMeta,
  changeProductStyles
} = require("../../../store/action-creators");

const mapStateToProps = ({ reviewsMeta, currentProduct, productStyles }) => ({
  reviewsMeta,
  currentProduct,
  productStyles
});

const mapDispatchToProps = dispatch => ({
  changeReviewsMeta: id => dispatch(changeReviewsMeta(id)),
  changeProductStyles: id => dispatch(changeProductStyles(id))
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
