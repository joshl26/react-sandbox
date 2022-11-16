import logo from "./logo.svg";
import "./App.css";
import ToggleButtons from "./sandbox/toggle_buttons/ToggleButtons";
import ToggleButtons2 from "./sandbox/state_examples/ToggleButtons2";
import StateButton from "./sandbox/state_examples/StateButton";
import StateButton2 from "./sandbox/state_examples/StateButton2";
import { Fragment } from "react";
import StateButton3 from "./sandbox/state_examples/StateButton3";
import StateButton4 from "./sandbox/state_examples/StateButton4";
import FormSubmit from "./sandbox/state_examples/1_reacting_to_input/FormSubmit";
import FeedbackForm from "./sandbox/state_examples/FeedBackForm";
import FormSubmit2 from "./sandbox/state_examples/FormSubmit2";
import MovingDot from "./sandbox/state_examples/MovingDot";
import Menu from "./sandbox/state_examples/Menu";
import TravelPlan from "./sandbox/state_examples/TravelPlan";

function App() {
  return (
    <Fragment>
      <h3>Toggle Button - 1</h3>
      <ToggleButtons label="Notifications" />
      <ToggleButtons label="Subscribe" />
      <br />
      <h3>Toggle Button - State/Style</h3>
      <ToggleButtons2 />
      <br />
      <h3>State Button 1 - Counter</h3>
      <StateButton />
      <br />
      <h3>State Button 2 - Single Attribute</h3>
      <StateButton2 />
      <br />
      <h3>State Button 3 - Multiple Attributes</h3>
      <StateButton3 />
      <br />
      <h3>State Button 4 - State Style Change</h3>
      <StateButton4 />
      <br />
      <h3>State Example - Form Submit</h3>
      <FormSubmit />
      <br />
      <h3>State Example - Feedback Form</h3>
      <FeedbackForm />
      <br />
      <h3>State Example - Form Submit 2</h3>
      <FormSubmit2 />
      <br />
      <h3>State Example - Moving Dot</h3>
      <MovingDot />
      <br />
      <h3>State Example - Menu</h3>
      <Menu />
      <br />
      <h3>State Example - Travel Plan</h3>
      <TravelPlan />
    </Fragment>
  );
}

export default App;
