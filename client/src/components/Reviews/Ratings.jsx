const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const styles = require("../../styles.js");

const AvgRatingAndStar = require("./AvgRatingAndStar.jsx");
const RatingHistogram = require("./RatingHistogram.jsx");
const QualityRatings = require("./QualityRatings.jsx");

const useStyles = makeStyles(styles);

module.exports = ({
  reviewsMeta,
  setStarFilter,
  currFilters,
  resetStarFilter
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <AvgRatingAndStar avgRating={reviewsMeta.avgRating} />
      <Grid container>
        <Grid item xs={6}>
          <Typography>Rating Breakdown</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.smallGreyFont}>
              {currFilters.length
                ? "Current Filter: " + currFilters.join(", ")
                : " "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              onClick={resetStarFilter}
              className={classes.smallGreyFont}
            >
              {currFilters.length ? "Remove All Filters" : " "}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <RatingHistogram
            ratingRelFreq={reviewsMeta.ratingRelFreq}
            ratings={reviewsMeta.ratings}
            setStarFilter={setStarFilter}
          />
        </Grid>
      </Grid>
      <p></p>
      {!reviewsMeta.recommended || isNaN(reviewsMeta.recommended[0]) ? null : (
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {`${Math.floor(
            100 *
              (reviewsMeta.recommended[0] /
                (reviewsMeta.recommended[0] + reviewsMeta.recommended[1]))
          )}% recommend`}
        </Grid>
      )}
      <p></p>
      <QualityRatings characteristics={reviewsMeta.characteristics} />
    </Grid>
  );
};
