const React = require("react");

const ProductDescription = ({ initialProduct }) => {
  return (
    <div style={{ textAlign: "left", marginTop: "25px" }}>
      <h5>{initialProduct.currentProduct.slogan}</h5>
      <div styles={{ "font-size": "100px" }}>
        {initialProduct.currentProduct.description}
      </div>
    </div>
  );
};

module.exports = ProductDescription;
