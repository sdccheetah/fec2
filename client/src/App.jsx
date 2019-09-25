const React = require("react");
const { Provider } = require("react-redux");
const store = require("../../store");
// const OmniContainer = require("./containers/OmniContainer.jsx");
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
const Router = require("react-router-dom").Router;
const {
  changeCurrentProduct,
  changeRelatedProducts,
  changeReviews,
  changeReviewsMeta,
  changeProductStyles
} = require("../../store/action-creators");

//const OmniContainer = require("./containers/OmniContainer.jsx");
const OmniContainer = require("./components/Omni.jsx");
let App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route
          path={"/products/:id"}
          // component={OmniContainer}
          // render={props => <About {...props} extra={someVariable} />}
          render={props => {
            store.dispatch(changeCurrentProduct(props.match.params.id));
            return <OmniContainer {...props} />;
          }}
        ></Route>
      </BrowserRouter>
      {/* <OmniContainer productId={1} /> */}
      {/* </Router> */}
    </Provider>
  );
};

module.exports = App;
