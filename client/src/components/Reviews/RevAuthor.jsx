const React = require("react");

const { Grid, Typography, Box } = require("@material-ui/core");

const { makeStyles } = require("@material-ui/core");
const useStyles = makeStyles(theme => ({
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  }
}));

module.exports = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box align="right" className={classes.smallGreyFont}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
