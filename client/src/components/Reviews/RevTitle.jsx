const React = require("react");
const { Grid, Typography, Box } = require("@material-ui/core");

module.exports = ({ children }) => {
  return (
    <Typography component="div" noWrap={true}>
      <Box fontWeight="fontWeightBold" component="span">
        {children}
      </Box>
    </Typography>
  );
};
