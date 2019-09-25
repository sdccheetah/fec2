const React = require("react");
const { Provider } = require("react-redux");
const store = require("../../store");
const OmniContainer = require("./containers/OmniContainer.jsx");
const Overview = require("./containers/OverviewContainer.js");
const Qna = require("./containers/QnaContainer.js");
const Related = require("./containers/RelatedContainer.js");
const Reviews = require("./containers/ReviewsContainer.js");

let App = () => {
  return (
    <Provider store={store}>
      <OmniContainer>
        <Overview />
        <Qna />
        <Related />
        <Reviews />
      </OmniContainer>
    </Provider>
  );
};

module.exports = App;
