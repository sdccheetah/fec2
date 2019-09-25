const React = require("react");
const { ArrowBack } = require("@material-ui/icons");
const { IconButton } = require("@material-ui/core");

const ViewButton = ({ handleBack }) => {
  return (
    <IconButton style={{ padding: "20px" }} onClick={handleBack}>
      <ArrowBack />
    </IconButton>
  );
};

module.exports = ViewButton;
