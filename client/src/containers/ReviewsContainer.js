const { connect } = require("react-redux");
const Reviews = require("../components/Reviews/index.jsx");

module.exports = connect(state => state)(Reviews);
