const React = require("react");
const starsToPct = require("./helpers/starsToPct.js");

module.exports = ({
  stars,
  percent,
  onMouseMove,
  isSelectable,
  size = "default"
}) => {
  let percentage = percent || starsToPct(stars);
  return (
    <div
      onMouseMove={onMouseMove || (() => {})}
      className={["stars", isSelectable ? "star-select" : ""].join(" ")}
    >
      <div onMouseMove={onMouseMove || (() => {})} className="empty-stars">
        ☆☆☆☆☆
      </div>
      <div className="full-stars" style={{ width: `${percentage}%` }}>
        ★★★★★
      </div>
    </div>
  );
};
