const React = require("react");
const starsToPct = require("./helpers/starsToPct.js");

module.exports = ({ stars }) => {
  let percentage = starsToPct(stars);
  return (
    <div className="stars">
      <div className="empty-stars">☆☆☆☆☆</div>
      <div className="full-stars" style={{ width: `${percentage}%` }}>
        ★★★★★
      </div>
    </div>
  );
};
