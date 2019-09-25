const React = require("react");
const { makeStyles } = require("@material-ui/core");
const {
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  button: {},
  input: {},
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

module.exports.AddQuestion = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleOpen}
      >
        ADD A QUESTION+
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
            <Typography id="transition-modal-title">ADD A QUESTION </Typography>
            <form noValidate autoComplete="off">
              <TextField />
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
