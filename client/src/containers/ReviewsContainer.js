const { connect } = require("react-redux");
const Reviews = require("../components/Reviews/index.jsx");
const {
  changeReviews,
  changeReviewsMeta
} = require("../../../store/action-creators");

const mapStateToProps = ({ reviewsMeta, reviews, currentProduct }) => ({
  reviewsMeta,
  reviews,
  currentProduct
});

const mapDispatchToProps = dispatch => ({
  changeReviewsMeta: id => dispatch(changeReviewsMeta(id)),
  changeReviews: id => dispatch(changeReviews(id))
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
