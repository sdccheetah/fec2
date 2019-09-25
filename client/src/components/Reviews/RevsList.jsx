const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const RevsListItem = require("./RevsListItem.jsx");

module.exports = props => {
  return (
    <Grid item xs={9}>
      <Typography>Reviews</Typography>
      <Grid container spacing={2}>
        {props.reviews.map(review => (
          <RevsListItem key={review.review_id} review={review} />
        ))}
      </Grid>
    </Grid>
  );
};
