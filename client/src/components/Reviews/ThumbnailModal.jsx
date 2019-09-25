const React = require("react");

const { makeStyles } = require("@material-ui/core");
const {
  Button,
  Link,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center"
  },
  paperModalBody: {
    height: "100%",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

module.exports = ({ thumbnail, isOpen, closeModal }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paperModalBody}>
            <img src={thumbnail} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
