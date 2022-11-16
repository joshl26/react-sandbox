import logo from "./logo.svg";
import "./App.css";
import ToggleButtons from "./sandbox/toggle_buttons/ToggleButtons";
import ToggleButtons2 from "./sandbox/toggle_buttons/ToggleButtons2";
import StateButton from "./sandbox/state_examples/StateButton";
import StateButton2 from "./sandbox/state_examples/StateButton2";
import { Fragment } from "react";
import StateButton3 from "./sandbox/state_examples/StateButton3";
import StateButton4 from "./sandbox/state_examples/StateButton4";

function App() {
  return (
    <Fragment>
      <h3>Toggle Button - 1</h3>
      <ToggleButtons label="Notifications" />
      <ToggleButtons label="Subscribe" />
      <br />
      <h3>Toggle Button - 2</h3>
      <ToggleButtons2 />
      <br />
      <h3>State Button 1 - Counter</h3>
      <StateButton />
      <h3>State Button 2 - Single Attribute</h3>
      <StateButton2 />
      <h3>State Button 3 - Multiple Attributes</h3>
      <StateButton3 />
      <h3>State Button 4 - Multiple Attributes</h3>
      <StateButton4 />
    </Fragment>
  );
}

export default App;
