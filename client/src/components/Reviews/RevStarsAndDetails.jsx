const React = require("react");

const { Grid, Typography, Box } = require("@material-ui/core");

const StarFill = require("../shared/StarFill.jsx");
const Moment = require("react-moment").default;
const { makeStyles } = require("@material-ui/core");
const useStyles = makeStyles(theme => ({
  smallGreyFont: {
    fontWeight: "fontWeightLight",
    fontSize: 10
  }
}));

module.exports = ({ review }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <StarFill stars={review.rating} />
      </Grid>
      <Grid item xs={6}>
        <Box align="right" className={classes.smallGreyFont}>
          {" "}
          <Moment format="MMMM D, YYYY" withTitle date={review.date} />
        </Box>
      </Grid>
    </Grid>
  );
};
