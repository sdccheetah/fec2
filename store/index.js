const { createStore, applyMiddleware, combineReducers } = require("redux");
const thunk = require("redux-thunk").default;
const rootReducer = combineReducers(require("./reducers"));

module.exports = createStore(rootReducer, applyMiddleware(thunk));
