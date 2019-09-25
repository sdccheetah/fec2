const React = require("react");
const Report = require("../shared/Report.jsx");

module.exports = ({ review }) => (
  <Report
    onSuccess={() => {}} //console.log("reported")}
    qar={"review"}
    qarId={review.review_id}
  />
);
