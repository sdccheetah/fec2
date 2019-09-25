const { connect } = require("react-redux");
const Related = require("../components/Related/index.jsx");
const {
  changeCurrentProduct,
  changeRelatedProducts
} = require("../../../store/action-creators");

const mapStateToProps = ({ relatedProducts, currentProduct }) => ({
  relatedProducts,
  currentProduct
});

const mapDispatchToProps = dispatch => ({
  changeCurrentProduct: id => dispatch(changeCurrentProduct(id)),
  changeRelatedProducts: id => dispatch(changeRelatedProducts(id))
});
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);
