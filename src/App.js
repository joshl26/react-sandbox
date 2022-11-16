import logo from "./logo.svg";
import "./App.css";
import ToggleButtons from "./sandbox/toggle_buttons/ToggleButtons";
import ToggleButtons2 from "./sandbox/toggle_buttons/ToggleButtons2";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h3>Toggle Button - 1</h3>
      <ToggleButtons label="Notifications" />
      <ToggleButtons label="Subscribe" />
      <br />
      <h3>Toggle Button - 2</h3>
      <ToggleButtons2 />
    </Fragment>
  );
}

export default App;
