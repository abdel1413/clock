import "./App.css";
import { BreakLength } from "./Components/BreakLength";
import { BreakSession } from "./Components/BreakSession";
import { TimerControllers } from "./Components/TimerControllers";
import { TimerSession } from "./Components/TimerSession";

function App() {
  return (
    <div className="App">
      <div>25+5 Clock</div>
      <BreakLength />
      <BreakSession />
      <TimerSession />
      <TimerControllers />
    </div>
  );
}

export default App;
