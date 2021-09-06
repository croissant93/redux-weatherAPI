import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./components/Todos";
import AddNumberContainer from "./containers/AddNumberContainer";
import DisplayNumberContainer from "./containers/DisplayNumberContainer";
import Timer from "./components/Timer";
import TimerContainer from "./containers/TimerContainer";
// import Generator from './components/Generator';

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      {/* <CounterContainer />
      <TodosContainer /> */}
      {/* <AddNumberContainer />
      <DisplayNumberContainer /> */}
      {/* <DisplayNumberRoot /> */}
      <TimerContainer />
    </div>
  );
}

export default App;
