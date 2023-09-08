import "./App.css";
import { Author } from "./Components/Author";
import { BreakLength } from "./Components/BreakLength";
import { BreakSession } from "./Components/BreakSession";
import { TimerControllers } from "./Components/TimerControllers";
import { TimerSession } from "./Components/TimerSession";

function App() {
  return (
    <div className="App">
      <div className="header"> 25 + 5 Clock</div>
      <div className="breaks">
        <BreakLength />
        <BreakSession />
      </div>
      <TimerSession />
      <TimerControllers />
      <div>
        <Author />
      </div>
    </div>
  );
}

export default App;
