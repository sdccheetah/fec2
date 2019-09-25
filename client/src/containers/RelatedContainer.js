const { connect } = require("react-redux");
const Related = require("../components/Related/index.jsx");

module.exports = connect(state => state)(Related);
