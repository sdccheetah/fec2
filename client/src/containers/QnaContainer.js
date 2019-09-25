const { connect } = require("react-redux");
const Qna = require("../components/Qna/index.jsx");

module.exports = connect(({ currentProduct }) => ({ currentProduct }))(Qna);
