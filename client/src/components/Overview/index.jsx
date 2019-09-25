const React = require("react");
const { useEffect } = require("react");
const App = require("./App.jsx");

module.exports = props => {
  useEffect(() => {
    let { id } = props.currentProduct;
    props.changeProductStyles(id);
    props.changeReviewsMeta(id);
  }, [props.currentProduct.id]);
  return (
    <div>
      <App initialProduct={props} />
    </div>
  );
};
