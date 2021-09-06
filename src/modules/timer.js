const TIMER = "timer/TIMER";
const START = "timer/START";

export const setTime = () => ({
  type: TIMER,
  time: 180,
});
export const start = () => ({
  type: START,
});

const initialState = {
  time: 0,
  diff: 1,
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER:
      return { ...state, time: action.time };
    case START:
      return { ...state, time: state.time - 1 };
    default:
      return state;
  }
};

export default timer;
