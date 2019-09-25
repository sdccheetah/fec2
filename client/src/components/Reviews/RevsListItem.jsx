const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography, Box, Link } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const RevTitle = require("./RevTitle.jsx");
const RevBody = require("./RevBody.jsx");
const RevRecomm = require("./RevRecomm.jsx");
const RevPhotos = require("./RevPhotos.jsx");
const RevAuthor = require("./RevAuthor.jsx");
const RevResponse = require("./RevResponse.jsx");
// const RevStars = require("./RevStars.jsx")
const RevStarsAndDetails = require("./RevStarsAndDetails.jsx");
const RevHelpfulOrReport = require("./RevHelpfulOrReport.jsx");

let useStyles = makeStyles({ revListItem: { paddingBottom: 20 } });

module.exports = ({ review, setCurrThumbnail }) => {
  let classes = useStyles();
  let [showAllBody, setShowAllBody] = useState(false);
  let summary = review.summary.slice(0, 60);
  let summaryMore = review.summary.slice(60);
  let body = review.body.slice(0, 250);
  let bodyMore = review.body.slice(250);
  return (
    <Grid item xs={12} className={classes.revListItem}>
      <RevStarsAndDetails review={review} />
      <RevTitle>{summary}</RevTitle>
      <RevBody>
        {summaryMore.length ? (
          <Box
            component="span"
            fontWeight={"fontWeightBold"}
          >{`...${summary}`}</Box>
        ) : null}
        {body + (showAllBody ? bodyMore : bodyMore.length ? "..." : "")}
        {!showAllBody && bodyMore.length ? (
          <span onClick={() => setShowAllBody(true)}>Show More</span>
        ) : null}
      </RevBody>
      <RevRecomm recommended={Boolean(review.recommend)} />
      {review.photos.length ? (
        <RevPhotos thumbnails={review.photos} onClick={setCurrThumbnail} />
      ) : null}
      <RevAuthor>{review.reviewer_name}</RevAuthor>
      {review.response ? <RevResponse>{review.response}</RevResponse> : null}
      <RevHelpfulOrReport review={review} />
    </Grid>
  );
};
