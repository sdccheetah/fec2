const React = require("react");
const axios = require("../../../../helpers/axiosApi.js");
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
  answerbutton: {
    fontWeight: "fontWeightLight",
    fontSize: 10,
    verticalAlign: "top",
    underline: "always"
  },
  button: {},
  input: {},
  modal: {
    display: "flex",
    height: "100%",

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

const endpoint = {
  review: id => `/reviews/${id}`,
  question: id => `/qa/${id}`,
  answer: id => `/qa/${id}/answers`
};

module.exports = ({
  fields,
  qarfield,
  modalTitle,
  bodyTextPlaceholder,
  children,
  handleSubmit,
  buttonText,
  subtitle,
  addlFieldValues,
  endpointId
}) => {
  const classes = useStyles();

  const common = {
    modalTitle: modalTitle,
    summaryText: "Review Summary",
    bodyText: bodyTextPlaceholder,
    nicknameText: "jack123",
    emailText: "jack@gmail.com"
  };

  const [values, setValues] = React.useState(
    Object.assign(common, fields || {})
  );
  const [submitTried, setSubmitTried] = React.useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isValid = () => {
    return {
      bodyText: qarfield !== "review" || 50 <= values.bodyText.length,
      nicknameText: values.nicknameText !== common.nicknameText,
      emailText: (() => {
        const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        let found = values.emailText.match(validEmailRegex);

        return (
          values.emailText !== common.emailText &&
          found !== null &&
          found[0].length === values.emailText.length
        );
      })()
    };
  };

  return (
    <div>
      {qarfield === "answer" ? (
        <Link onClick={handleOpen} className={classes.answerbutton}>
          Add Answer
        </Link>
      ) : (
        <Button
          variant={"outlined"}
          className={classes.button}
          onClick={handleOpen}
        >
          {buttonText}
        </Button>
      )}
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
          <div className={classes.paperModalBody}>
            <Typography id="transition-modal-title">{modalTitle}</Typography>
            <Typography>{subtitle || ""}</Typography>
            <form noValidate autoComplete="off">
              {qarfield === "review" ? (
                <TextField
                  id="standard-multiline-flexible"
                  label={"Review Summary"}
                  placeholder={values.summaryText}
                  onChange={handleChange("summaryText")}
                  className={classes.textField}
                  margin="normal"
                  inputProps={{ maxLength: 60 }}
                />
              ) : null}
              <br />
              <TextField
                required
                id="standard-multiline-flexible"
                label={bodyTextPlaceholder}
                multiline
                rowsMax="4"
                placeholder={bodyTextPlaceholder}
                onChange={handleChange("bodyText")}
                className={classes.textField}
                margin="normal"
                error={submitTried && !isValid().bodyText}
                inputProps={{ maxLength: 1000 }}
                helperText={
                  qarfield === "review"
                    ? 50 > values.bodyText.length
                      ? `Minimum required characters left: ${
                          values.bodyText === bodyTextPlaceholder
                            ? 50
                            : 50 - values["bodyText"].length
                        }`
                      : "Minimum reached"
                    : ""
                }
              />
              <br />
              <TextField
                required
                id="standard-required"
                label="Nickname"
                placeholder={values.nicknameText}
                onChange={handleChange("nicknameText")}
                className={classes.textField}
                error={submitTried && !isValid().nicknameText}
                margin="normal"
                inputProps={{ maxLength: 60 }}
                helperText="For privacy reasons, do not use your full name or email address"
              />
              <br />
              <TextField
                required
                id="standard-required"
                label="E-mail"
                placeholder={values.emailText}
                onChange={handleChange("emailText")}
                className={classes.textField}
                error={submitTried && !isValid().emailText}
                margin="normal"
                inputProps={{ maxLength: 60 }}
                helperText="For authentication reasons, you will not be emailed"
              />
              {children}
            </form>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                setSubmitTried(true);

                if (Object.values(isValid()).some(item => !item)) {
                } else {
                  let postObj = { ...addlFieldValues };
                  postObj.summary = values.summaryText;
                  postObj.body = values.bodyText;
                  postObj.name = values.nicknameText;
                  postObj.email = values.emailText;
                  axios
                    .post(endpoint[qarfield](endpointId), postObj)
                    .then(res => {
                      //console.log(res);
                      handleClose();
                      handleSubmit && handleSubmit();
                    })
                    .catch(err => {
                      console.error(err);
                      handleClose();
                    });
                }
              }}
            >
              {`SUBMIT YOUR ${qarfield}`}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
