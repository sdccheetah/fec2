const React = require("react");
const { Grid, Typography, Box } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/styles");
const RevMarkHelpful = require("./RevMarkHelpful.jsx");
const RevReport = require("./RevReport.jsx");

const useStyles = makeStyles(theme => ({
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  },
  smallGreyFontRightAlign: {
    textAlign: "right",
    fontWeight: "fontWeightLight",
    fontSize: 10
  }
}));

module.exports = ({ review }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <RevMarkHelpful review={review} />
      </Grid>
      <Grid item xs={1}>
        <Typography className={classes.smallGreyFont}>|</Typography>
      </Grid>
      <Grid item xs={8}>
        <RevReport review={review} />
      </Grid>
    </Grid>
  );
};
