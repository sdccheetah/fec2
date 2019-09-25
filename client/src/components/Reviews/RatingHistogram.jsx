const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");
const ProgressBar = require("./ProgressBar.jsx");
const { makeStyles } = require("@material-ui/core/styles");
const styles = require("../../styles.js");

const useStyles = makeStyles(styles);

module.exports = ({ ratingRelFreq, ratings, setStarFilter }) => {
  let classes = useStyles();
  return (
    <div>
      {Object.entries(ratingRelFreq || {}).map(([rating, freq]) => (
        <Grid
          onClick={() => {
            setStarFilter(rating);
          }}
          className={classes.ratingHistogramBar}
          key={"progress-bar-" + rating}
          container
        >
          <Grid item xs={3}>
            <Typography className={classes.smallGreyFont}>
              {rating} stars{" "}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <ProgressBar percentage={100 * freq} />
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.smallGreyFontRightAlign}>
              {ratings[rating] || 0}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
