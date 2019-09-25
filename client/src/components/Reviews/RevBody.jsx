const React = require("react");
const { Grid, Typography, Box } = require("@material-ui/core");

module.exports = ({ children }) => {
  return <Typography attr={0 /* component="div" */}>{children}</Typography>;
};
