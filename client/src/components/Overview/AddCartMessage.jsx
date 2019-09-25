const React = require("react");
const { Button, IconButton, Snackbar } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { Close } = require("@material-ui/icons");

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  button: {
    margin: theme.spacing(1),
    width: "200px"
  }
}));

AddCartMessage = ({ handleCartClick }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
    handleCartClick();
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        className={classes.button}
        id={"addToCart"}
      >
        ADD TO CART
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Added to cart</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        ]}
      />
    </div>
  );
};

module.exports = AddCartMessage;
