const React = require("react");
const StarFill = require("../shared/StarFill.jsx");

const ProductInformation = () => {
  const style = {
    marginTop: "50px"
  };
  return (
    <div>
      <div style={style}>
        <div style={{ display: "flex" }}>
          <StarFill />
          <a
            href="#"
            style={{
              paddingTop: "1px",
              paddingRight: "190px",
              fontSize: "11px",
              color: "dimgrey"
            }}
          >
            <u>Reviews</u>
          </a>
        </div>

        <div>Jackets</div>
        <h1>Camo Onesie</h1>
        <div>$140</div>
      </div>
    </div>
  );
};

module.exports = ProductInformation;
