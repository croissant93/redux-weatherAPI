import { delay } from "@redux-saga/core/effects";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeatherBox from "../components/WeatherBox";
import { weather, setWeather } from "../modules/weatherBox";

const WeatherBoxContainer = () => {
  const { data, weatherInfo, temp, stack } = useSelector((state) => ({
    data: state.weatherBox.data,
    weatherInfo: state.weatherBox.weather,
    temp: state.weatherBox.temp,
    stack: state.weatherBox.stack,
  }));

  const dispatch = useDispatch();
  const getWeather = (id) => dispatch(weather(id));

  useEffect(() => {
    // getWeather(1835235);

    for (const keys in apiId) {
      getWeather(apiId[keys]);

      // console.log(apiId[keys]);
    }
  }, []);

  return (
    <WeatherBox
      stack={stack}
      data={data}
      weatherInfo={weatherInfo}
      temp={temp}
      getWeather={getWeather}
      setWeather={setWeather}
    />
  );
};
const apiId = {
  id1: 4115508,

  id2: 4115429,

  id3: 4114930,

  id4: 4109452,

  id5: 3204793,

  id6: 3200016,

  id7: 3199360,

  id8: 1715541,

  id9: 284495,

  id10: 587378,
};
export default WeatherBoxContainer;
