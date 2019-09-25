const React = require("react");
const { makeStyles } = require("@material-ui/core");
const { Button } = require("@material-ui/core/");

const useStyles = makeStyles(theme => ({
  button: {
    justifyContent: "left"
  },
  input: {}
}));

module.exports = ({ onClick, buttonText, qarfield }) => {
  const classes = useStyles();
  return qarfield === "answer" ? (
    <Button className={classes.button} onClick={onClick}>
      {buttonText || "SHOW MORE"}
    </Button>
  ) : (
    <Button variant="outlined" className={classes.button} onClick={onClick}>
      {buttonText || "SHOW MORE"}
    </Button>
  );
};
