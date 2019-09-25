const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");

const StarFill = require("../shared/StarFill.jsx");

module.exports = ({ avgRating }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        {isNaN(avgRating) ? null : (
          <Typography component="div">
            {" "}
            <Box
              component="div"
              fontSize="h2.fontSize"
              textAlign="center"
              m={1}
            >
              {avgRating && avgRating.toFixed(1)}
            </Box>
          </Typography>
        )}
      </Grid>
      <Grid item xs={6}>
        <StarFill stars={avgRating} />
      </Grid>
    </Grid>
  );
};
