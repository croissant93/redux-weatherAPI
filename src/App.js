import Timer from "./components/Timer";
import WeatherBox from "./components/WeatherBox";
import TimerContainer from "./containers/TimerContainer";
import WeatherBoxContainer from "./containers/WeatherBoxContainer";
// import Generator from './components/Generator';

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      {/* <TimerContainer /> */}
      <WeatherBoxContainer />
    </div>
  );
}

export default App;
