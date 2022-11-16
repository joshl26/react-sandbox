import { Fragment } from "react";

import logo from "./logo.svg";
import "./App.css";
import ToggleButtons from "./sandbox/toggle_buttons/ToggleButtons";
import ToggleButtons2 from "./sandbox/state_examples/state_button_examples/ToggleButtons2";
import StateButton from "./sandbox/state_examples/state_button_examples/StateButton";
import StateButton2 from "./sandbox/state_examples/state_button_examples/StateButton2";
import StateButton3 from "./sandbox/state_examples/state_button_examples/StateButton3";
import StateButton4 from "./sandbox/state_examples/state_button_examples/StateButton4";
import FormSubmit from "./sandbox/state_examples/1_reacting_to_input/FormSubmit";
import FeedbackForm from "./sandbox/state_examples/2_choosing_state_structure/FeedBackForm";
import FormSubmit2 from "./sandbox/state_examples/2_choosing_state_structure/FormSubmit2";
import MovingDot from "./sandbox/state_examples/2_choosing_state_structure/MovingDot";
import Menu from "./sandbox/state_examples/2_choosing_state_structure/Menu";
import TravelPlan from "./sandbox/state_examples/2_choosing_state_structure/TravelPlan";
import Accordion from "./sandbox/state_examples/3_components_sharing_state/Accordion";
import FirstComponent from "./sandbox/describing_the_ui/FirstComponent";
import ImportExportComponent from "./sandbox/describing_the_ui/ImportExportComponent";
import WritingMarkupJSX from "./sandbox/describing_the_ui/WritingMarkupJSX";
import JavascriptJSXCurlyBraces from "./sandbox/describing_the_ui/JavascriptJSXCurlyBraces";
import PassingPropsToComponent from "./sandbox/describing_the_ui/PassingPropsToComponent";
import PassingJSXAsChildren from "./sandbox/describing_the_ui/PassingJSXAsChildren";

function App() {
  return (
    <Fragment>
      <div>
        <h1>React Describing The UI</h1>
        <div>
          <h2>Section 1 - Youre First Component</h2>
          <FirstComponent />
          <br />
          <h2>Section 2 - Importing and Exporting Components</h2>
          <ImportExportComponent />
          <h2>Section 3 - Writing Markup with JSX</h2>
          <WritingMarkupJSX />
          <h2>Section 4 - Javascript in JSX with Curly Braces</h2>
          <JavascriptJSXCurlyBraces />
          <h2>Section 5A - Passing Props to a Component</h2>
          <PassingPropsToComponent />
          <h2>Section 5B - Passing JSX as Children</h2>
          <PassingJSXAsChildren />

          <h2>Section 6 - Conditional Rendering</h2>
          <h2>Section 7 - Javascript in JSX with Curly Braces</h2>
          <h2>Section 8 - Passing Props to a Component</h2>
        </div>

        <h1>React State Examples</h1>
        <div>
          <h2>Section 1 - Reacting to Input with State</h2>
          <h3>Form Submit</h3>
          <FormSubmit />
          <br />
        </div>
        <div>
          <h2>Section 2 - Choosing the State Structure</h2>
          <h3>Feedback Form</h3>
          <FeedbackForm />
          <br />
          <h3>Feedback Form 2</h3>
          <FormSubmit2 />
          <br />
          <h3>Moving Dot</h3>
          <MovingDot />
          <br />
          <h3>Menu</h3>
          <Menu />
          <br />
          <h3>Travel Plan</h3>
          <TravelPlan />
        </div>
        <div>
          <h2>Section 3 - Sharing State Between Components</h2>
          <Accordion />
        </div>
        <div>
          <h2>State Button Examples</h2>
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
        </div>
      </div>
    </Fragment>
  );
}

export default App;
