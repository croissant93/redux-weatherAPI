// 액션타입 만들기
// Ducks 패턴을 따를땐 액션의 이름에 접두사 - 중복방지

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
// 액션 생성함수를 만들고 export로 내보내기

export const setDiff = diff => ({
  type: SET_DIFF,
  diff,
});
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  number: 0,
  diff: 1,
};

// 리듀서 선언
//export default 로 내보내기
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
