import React from "react";
import { useEffect } from "react";
import axios from "axios";

const WeatherBox = ({ data, weatherInfo, temp, getWeather, stack }) => {
  // useEffect(() => {
  //   getWeather();
  // }, [temp]);

  return (
    <div>
      <button onClick={() => getWeather(2172797)}>날씨 조회</button>
      <h1>Weather</h1>
      {data !== undefined && (
        <section className="wrap">
          <div>도시이름: {data.name}</div>
          <div>날씨: {weatherInfo.main}</div>
          <div>현재온도: {Math.floor(temp.temp - 273.15)}도</div>
          <div>최고온도: {Math.floor(temp.temp_max - 273.15)}도</div>
          <div>최저온도: {Math.floor(temp.temp_min - 273.15)}도</div>
          {/* <div>갱신횟수: {stack}번</div> */}
        </section>
      )}
    </div>
  );
};

export default WeatherBox;
