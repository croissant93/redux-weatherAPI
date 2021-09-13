import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const getData = (id) => {
  // const id = 2172797;
  // const id2 = 1835235;
  // const positionData = {};
  // const handleGeoSucces = (position) => {
  //   positionData.latitude = position.coords.latitude;
  //   positionData.longitude = position.coords.longitude;

  //   return positionData;
  // };

  // const handleGeoError = (position) => {
  //   console.log("Cant get your position.");
  // };

  // navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);

  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=87a5f6eaa0c557e2175a48e070f0980f`
  );
};

// const api = {
//   getData(id),
// };

export default getData;
