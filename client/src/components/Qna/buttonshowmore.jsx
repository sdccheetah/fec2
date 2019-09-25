const React = require("react");
const { makeStyles } = require("@material-ui/core");
const { Button } = require("@material-ui/core/");

const useStyles = makeStyles(theme => ({
  button: {},
  input: {}
}));

module.exports.ShowMore = () => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.button}>
      SHOW MORE ANSWERS
    </Button>
  );
};
