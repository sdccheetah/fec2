const React = require("react");

module.exports = ({ percentage }) => {
  return (
    <div className="progress-bar-custom">
      <div className="bar"></div>
      <div
        className="bar bar-full"
        style={{ width: `${percentage || 0}%` }}
      ></div>
    </div>
  );
};
