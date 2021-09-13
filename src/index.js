import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/App.css";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/index";
import { Provider } from "react-redux";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga, getWeather, saga } from "./middlewares/sagas";
// import * as serviceWorker from "./serviceWorker";
import timer from "./modules/timer";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();

export default store;
