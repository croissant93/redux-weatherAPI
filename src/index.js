import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/index";
import { Provider } from "react-redux";
import addNumber from "./modules/addNumber";
import myLogger from "./middlewares/myLogger";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./middlewares/sagas";
// import * as serviceWorker from "./serviceWorker";
import timer from "./modules/timer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(timer, applyMiddleware(sagaMiddleware));
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
