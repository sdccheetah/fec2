const React = require("react");
const { useEffect } = require("react");
const { Container } = require("@material-ui/core");
const Overview = require("../containers/OverviewContainer.js");
const Qna = require("../containers/QnaContainer.js");
const Related = require("../containers/RelatedContainer.js");
const Reviews = require("../containers/ReviewsContainer.js");

module.exports = props => {
  return (
    <div>
      <Container>
        <Overview />
        <Related history={props.history} />
        <Qna />
        <Reviews />
      </Container>
    </div>
  );
};
