const React = require("react");
const StarFill = require("../shared/StarFill.jsx");
const { Typography, Box, Grid } = require("@material-ui/core");
//const { Box } = require("@material-ui/core");

module.exports = ({ onChange }) => {
  const [value, setValue] = React.useState(2);
  const [percent, setPercent] = React.useState(0);
  const ratingDescs = ["Poor", "Fair", "Average", "Good", "Great"];

  return (
    <div
      onMouseMove={e => {
        let { x, y, width, height, top, left, bottom, right } =
          document.getElementsByClassName("star-select")[0] &&
          document
            .getElementsByClassName("star-select")[0]
            .getBoundingClientRect();
        let { clientX, clientY } = e;
        if (clientY >= top && clientY <= bottom && clientX <= right) {
          setPercent(Math.abs(clientX - x) / width);
          onChange(Math.floor(5 * percent) + 1);
        }
      }}
    >
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Overall Rating</Typography>
        <Grid container>
          <Grid item xs={6}>
            <StarFill isSelectable={true} stars={Math.floor(5 * percent) + 1} />
          </Grid>
          <Grid item xs={6}>
            {ratingDescs.slice(percent * 5, percent * 5 + 1)}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

{
  /* <div onmousemove="showCoords(event)" onmouseout="clearCoor()"></div>

<p>Mouse over the rectangle above to get the horizontal and vertical coordinates of your mouse pointer.</p>

<p id="demo"></p>

<script>
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}
</script> */
}

{
  /* 
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var rect = event.target.getBoundingClientRect();
  var elCoords = [rect.top, rect.right, rect.bottom, rect.left].join(",");
  var coords = "X coords: " + x + ", Y coords: " + y + ", El coords: " + elCoords;
  document.getElementById("demo").innerHTML = coords;
}
document.getElementById.getBoundingClientRect();
*/
}
