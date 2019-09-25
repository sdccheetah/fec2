const React = require("react");
const { useState, useEffect } = require("react");
const { Paper, Typography, Grid } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const MarkerBar = require("../shared/MarkerBar.jsx");
const StarFill = require("../shared/StarFill.jsx");
const Ratings = require("./Ratings.jsx");
const RevsList = require("./RevsList.jsx");

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

module.exports = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography>{"RATINGS & REVIEWS"}</Typography>
      <Grid container spacing={2}>
        <Ratings reviewsMeta={props.reviewsMeta} />
        <RevsList reviews={props.reviews} />
      </Grid>
      {/* <MarkerBar percentage={25} />
      <StarFill percentage={67.5} /> */}
    </Paper>
  );
};
