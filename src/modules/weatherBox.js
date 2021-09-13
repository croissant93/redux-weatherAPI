export const WEATHER = "weatherBox/WEATHER";
export const SETWEATHER = "weatherBox/SETWEATHER";

export const weather = (id) => ({
  type: WEATHER,
  id,
});
export const setWeather = (data, weather, temp) => ({
  type: SETWEATHER,
  data: data,
  weather: weather,
  temp: temp,
});

const initialState = {
  data: {},
  weather: {},
  temp: {},
  stack: 0,
};

const weaterBox = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER:
      return {
        ...state,
        data: action.data,
        weather: action.weather,
        temp: action.temp,
        stack: state.stack + 1,
      };
    case SETWEATHER:
      return {
        ...state,
        data: action.data,
        weather: action.weather,
        temp: action.temp,
        stack: state.stack + 1,
      };
    default:
      return state;
  }
};

export default weaterBox;
