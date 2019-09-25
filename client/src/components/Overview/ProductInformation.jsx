const React = require("react");
const StarFill = require("../shared/StarFill.jsx");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const ProductInformation = ({ initialProduct, styles }) => {
  const style = {
    marginTop: "50px"
  };

  const useStyles = makeStyles({
    regularPrice: {
      color: "black"
    },
    struckthroughPrice: {
      color: "black",
      textDecoration: "line-through",
      display: "inline-block"
    },
    salePrice: {
      color: "red",
      display: "inline-block"
    }
  });
  const Price = props => {
    const classes = useStyles();
    if (props.sale_price === undefined || props.sale_price === "0") {
      return <Typography>${props.original_price}</Typography>;
    } else {
      return (
        <div>
          <div className={classes.struckthroughPrice}>
            ${props.original_price}
          </div>
          <div className={classes.salePrice}>${props.sale_price}</div>
        </div>
      );
    }
  };
  return (
    <div>
      <div style={style}>
        <div style={{ display: "flex" }}>
          {initialProduct.reviewsMeta.avgRating ? (
            <StarFill stars={initialProduct.reviewsMeta.avgRating} />
          ) : null}
          <a
            id="reviews-jump"
            href="#reviews"
            style={{
              paddingTop: "1px",
              fontSize: "11px",
              color: "dimgrey"
            }}
          >
            {initialProduct.reviewsMeta.avgRating ? (
              <u>Reviews</u>
            ) : (
              <u>Add a review</u>
            )}
          </a>
        </div>
        <div>{initialProduct.currentProduct.category}</div>
        <h1>{initialProduct.currentProduct.name}</h1>
        {!styles.style_id
          ? Price(initialProduct.productStyles[0])
          : Price(styles)}
      </div>
    </div>
  );
};

module.exports = ProductInformation;
