const React = require("react");

module.exports = ({ percentage }) => {
  return (
    <div className="bar-and-marker">
      {/* <div className="vert-sep" id="vert-sep-left" /> */}
      <div className="bar" />
      <div className="marker" style={{ left: `${percentage}%` }}>
        ▼
      </div>
      {/* <div className="vert-sep" id="vert-sep-right" /> */}
    </div>
  );
};
