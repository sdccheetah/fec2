const React = require("react");

const { Grid, Typography, Box } = require("@material-ui/core");

const { makeStyles } = require("@material-ui/core");
const useStyles = makeStyles(theme => ({
  boldGreyFont: {
    fontWeight: "fontWeightBold",
    fontSize: 10
  }
}));

module.exports = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.boldGreyFont}>Response from seller</Box>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};
