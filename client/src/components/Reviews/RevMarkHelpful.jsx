const React = require("react");
const MarkHelpful = require("../shared/Helpfulness.jsx");

module.exports = ({ review }) => (
  <MarkHelpful
    onSuccess={() => {}} //console.log("helpful")}
    helpfulnessCounter={review.helpfulness}
    qar={"review"}
    qarId={review.review_id}
  />
);
