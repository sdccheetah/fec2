const React = require("react");
const { Button } = require("@material-ui/core");
const AddCartMessage = require("./AddCartMessage.jsx");
const { makeStyles } = require("@material-ui/core/styles");
const axios = require("../../../../helpers/axiosApi.js");

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "200px"
  }
}));

const AddToCart = ({ soldOut, productId, getCart }) => {
  const classes = useStyles();

  handleClick = () => {
    axios
      .post("/cart", {
        user_session: parseInt(document.cookie.split("=")[1]),
        product_id: productId
      })
      .then(() => {
        getCart();
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {!soldOut ? (
        <AddCartMessage variant="outlined" handleCartClick={handleClick} />
      ) : (
        <Button
          variant="contained"
          color="secondary"
          disabled
          className={classes.button}
        >
          SOLD OUT
        </Button>
      )}
    </div>
  );
};

module.exports = AddToCart;
