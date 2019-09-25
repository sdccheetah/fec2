const React = require("react");
const { useEffect } = require("react");
const { Container } = require("@material-ui/core");

module.exports = props => {
  useEffect(() => {
    props.changeCurrentProduct(1);
  }, []);
  return <Container>{props.children}</Container>;
};
