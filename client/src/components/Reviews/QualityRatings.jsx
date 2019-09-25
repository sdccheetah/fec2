const React = require("react");
const { Box, Grid, Typography } = require("@material-ui/core");
const MarkerBar = require("../shared/MarkerBar.jsx");
const characTemplates = require("./constants/characteristics.js");
const styles = require("../../styles.js");

module.exports = ({ characteristics }) => {
  return (
    <div>
      {Object.entries(characteristics || {}).map(([char, rating]) => (
        <Grid key={"marker-bar-" + char} container>
          <Grid item xs={12}>
            {char}
          </Grid>
          <Grid item xs={12}>
            <MarkerBar percentage={100 * (rating.value / 5)} />
          </Grid>
          <Grid item xs={6} style={styles.smallGreyFont}>
            {characTemplates[char][0]}
          </Grid>
          <Grid
            item
            xs={6}
            style={Object.assign({ textAlign: "right" }, styles.smallGreyFont)}
          >
            <span>{characTemplates[char][4]}</span>
          </Grid>
          <br />
        </Grid>
      ))}
    </div>
  );
};
