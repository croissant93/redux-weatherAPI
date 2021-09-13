import { call, delay } from "@redux-saga/core/effects";
import {
  put,
  takeEvery,
  all,
  takeLatest,
  take,
  select,
  actionChannel,
  fork,
  cancelled,
} from "redux-saga/effects";
import { useSelector } from "react-redux";
import { buffers, channel, eventChannel, END } from "redux-saga";
import getData from "../api/weatherData";
import {
  setWeather,
  weather,
  WEATHER,
  SETWEATHER,
} from "../modules/weatherBox";

// export function* timerStart() {
//   console.log("START!");
//   while (true) {
//     yield delay(1000);
//     yield put({ type: "timer/START" });
//   }
// }
// export function* notice() {
//   alert("날씨가 갱신됩니다.");
// }
// export function* getWeather() {
//   while (true) {
//     try {
//       const action = yield take(WEATHER);
//       console.log(action);
//       const { data } = yield call(getData, action.id);
//       console.log(data);

//       yield put(setWeather(data, data.weather[0], data.main));
//       const state = yield select();
//       console.log(state);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
// export function* getWeather() {
//   const requestChan = yield actionChannel(WEATHER, buffers.sliding(10));

//   while (true) {
//     try {
//       const action = yield take(requestChan);
//       console.log(action);
//       // const action = yield take(WEATHER);
//       const { data } = yield call(getData, action.id);

//       // console.log(action);
//       // const { data } = yield call(getData, action.id);

//       yield put(setWeather(data, data.weather[0], data.main));
//       yield delay(2000);
//       const state = yield select();
//       console.log(state);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
const cityId = [
  { id: 4115508 },
  { id: 4115429 },
  { id: 4114930 },
  { id: 4109452 },
  { id: 3204793 },
  { id: 3200016 },
  { id: 3199360 },
  { id: 1715541 },
  { id: 284495 },
  { id: 587378 },
];

const listChannel = (list) => {
  return eventChannel((emitter) => {
    const indexMax = list.length;
    let index = 0;
    const iv = setInterval(() => {
      if (index < indexMax) {
        console.log(index);
        emitter(list[index]);
        index += 1;
      } else {
        emitter(END);
      }
    }, 4000);
    return () => {
      clearInterval(iv);
    };
  });
};

export function* getWeather() {
  const chan = yield call(listChannel, cityId);
  try {
    while (true) {
      let { id } = yield take(chan);
      const { data } = yield call(getData, id);
      yield put(setWeather(data, data.weather[0], data.main));
    }
  } finally {
    console.log("END");
  }
}

function* weatherWorker(chan) {
  console.log(chan);
  while (true) {
    const action = yield take(chan);

    const { data } = yield call(getData, action);
    console.log(data);

    yield put(setWeather(data, data.weather[0], data.main));
  }
}

export function* rootSaga() {
  yield all([getWeather()]);
  // yield takeEvery(WEATHER, getWeather);
}

//
// 임의의 API

// 회원가입과 로그인 플로우 패스트파이브_장소
// 멤버쉽만들고
// 멤머쉽가입절차 전화번호 -> 패스트파이브 쪽으로 콜 유효한 사람인지 체크
