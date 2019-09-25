const React = require("react");

const { Grid, Typography, Box } = require("@material-ui/core");

const { makeStyles } = require("@material-ui/core");
const useStyles = makeStyles(theme => ({
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  }
}));

module.exports = ({ recommended }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.smallGreyFont}>
          {recommended ? "✔ I recommend this product." : ""}
        </Box>
      </Grid>
    </Grid>
  );
};
