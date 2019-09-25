const React = require("react");
const { useState } = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const { Modal, Backdrop, Fade, Grid, Button } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    position: "absolute",
    overflow: "scroll",
    height: "100%"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    height: "100%",
    width: "350px"
  },
  imageCrop: {
    height: "100px",
    width: "100px",
    objectFit: "cover",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  spacing: {
    marginBottom: "20px",
    height: "100px",
    width: "100px",
    marginTop: "20px"
  }
}));

ShowCart = ({ productImages, productInfo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="outlined">
        Cart
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" style={{ textAlign: "center" }}>
              Shopping Cart
            </h2>
            <Grid container spacing={3} justify="center">
              <Grid item xs={6}>
                <div style={{ float: "right" }}>
                  {productImages.map((image, i) => {
                    return (
                      <div className={classes.spacing} key={i}>
                        {image ? (
                          <img
                            id="transition-modal-description"
                            src={image}
                            className={classes.imageCrop}
                          />
                        ) : (
                          <img
                            id="transition-modal-description"
                            src="https://via.placeholder.com/100"
                            className={classes.imageCrop}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </Grid>
              <Grid item xs={6}>
                {productInfo.map((info, i) => {
                  return (
                    <div className={classes.spacing} key={i}>
                      <div style={{ fontSize: "12px" }}>{info.category}</div>
                      <div>{info.name}</div>
                      <div style={{ fontSize: "12px" }}>
                        ${info.default_price}
                      </div>
                    </div>
                  );
                })}
              </Grid>
            </Grid>

            <Grid container justify="center">
              {productImages.length ? (
                <Button>CHECKOUT</Button>
              ) : (
                <div>Add items to bag</div>
              )}
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

module.exports = ShowCart;
