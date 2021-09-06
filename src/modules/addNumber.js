const PLUS = "addNumber/PLUS";
const MINUS = "addNumber/MINUS";
const SET_PARAM = "addNumber/SET_PARAM";
const FONT_COLORB = "addNumber/FONT_BLUE";
const FONT_COLORR = "addNumber/FONT_RED";

export const plus = () => ({
  type: PLUS,
});
export const minus = () => ({
  type: MINUS,
});
export const setParam = (param) => ({
  type: SET_PARAM,
  param,
});

const initialState = {
  result: 0,
  param: 1,
  color: "black",
};

const addNumber = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { ...state, result: state.result + state.param };
    case MINUS:
      return { ...state, result: state.result - state.param };
    case SET_PARAM:
      return { ...state, param: action.param };
    case FONT_COLORB:
      return { ...state, color: "blue" };
    case FONT_COLORR:
      return { ...state, color: "red" };
    default:
      return state;
  }
};
export default addNumber;
