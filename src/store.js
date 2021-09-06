import { createStore } from 'redux';

const changeNumber = (state = { redNum: 0 }, action) => {
  switch (action.type) {
    case 'plus':
      return { ...state, redNum: state.redNum + action.size };
    case 'minus':
      return { ...state, redNum: state.redNum - action.size };
    default:
      return state;
  }
};

const storeDU = createStore(
  changeNumber,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeDU;
