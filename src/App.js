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
import ConditionalRendering from "./sandbox/describing_the_ui/ConditionalRendering";
import RenderingLists from "./sandbox/describing_the_ui/RenderingLists";
import PureComponent from "./sandbox/describing_the_ui/PureComponent";
import UnpureComponent from "./sandbox/describing_the_ui/UnpureComponent";
import PureComponent2 from "./sandbox/describing_the_ui/PureComponent2";
import RespondingToEvents from "./sandbox/adding_interactivity/RespondingToEvents";
import ReadingPropsEventHandler from "./sandbox/adding_interactivity/ReadingPropsEventHandler";
import PassingEventHandlersAsProps from "./sandbox/adding_interactivity/PassingEventHandlersAsProps";
import NamingEventHandlerProps from "./sandbox/adding_interactivity/NamingEventHandlerProps";
import EventPropagation from "./sandbox/adding_interactivity/EventPropagation";
import StoppingPropagation from "./sandbox/adding_interactivity/StoppingPropagation";
import PreventingDefaultBehaviour from "./sandbox/adding_interactivity/PreventingDefaultBehaviour";
import MultipleStateComponent from "./sandbox/adding_interactivity/MultipleStateComponent";
import StateIsolatedAndPrivate from "./sandbox/adding_interactivity/StateIsIsolatedAndPrivate";
import SettingStateTriggersRender from "./sandbox/adding_interactivity/SettingStateTriggersRenders";
import CopyingObjectsWithSpread from "./sandbox/adding_interactivity/CopyingObjectsWithSpread";
import UpdatingNestedObject from "./sandbox/adding_interactivity/UpdatingNestedObject";
import UpdatingArraysInState from "./sandbox/adding_interactivity/UpdatingArraysInState";
import RemovingFromAnArray from "./sandbox/adding_interactivity/RemovingFromAnArray";
import TransformingAnArray from "./sandbox/adding_interactivity/TransformingAnArray";
import ReplacingItemsInArray from "./sandbox/adding_interactivity/ReplacingItemsInArray";
import InsertingIntoArray from "./sandbox/adding_interactivity/InsertingIntoAnArray";
import MakingOtherChangesToArray from "./sandbox/adding_interactivity/MakingOtherChangesToArray";
import UpdateObjectInArray from "./sandbox/adding_interactivity/UpdateObjectInArray";
import CountdownTimer from "./sandbox/custom_hooks/countdown_timer/CountDownTimer";

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <Fragment>
      <div>
        <h1>React Docs</h1>
        <div>
          <h1>Chapter 1 - React Describing The UI</h1>
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
          <ConditionalRendering />
          <h2>Section 7 - Rendering Lists</h2>
          <RenderingLists />
          <h2>Section 8A - Unpure Components</h2>
          <UnpureComponent />
          <h2>Section 8B - Keeping Components Pure</h2>
          <PureComponent />
          <h2>Section 8C - Local Mutation: Your components little secret</h2>
          <PureComponent2 />
        </div>

        <div>
          <h1>Chapter 2 - Adding Interactivity</h1>
          <h2>Section 1 - Adding Event Handlers</h2>
          <RespondingToEvents />
          <h2>Section 2 - Reading Props in Event Handlers</h2>
          <ReadingPropsEventHandler />
          <h2>Section 3 - Passing event handlers as props</h2>
          <PassingEventHandlersAsProps />
          <h2>Section 4 - Naming Event Handler Props</h2>
          <NamingEventHandlerProps />
          <h2>Section 5 - Event Propagation</h2>
          <EventPropagation />
          <h2>Section 6 - Stopping Propagation</h2>
          <StoppingPropagation />
          <h2>Section 7 - Preventing Default Behaviour</h2>
          <PreventingDefaultBehaviour />
          <h2>Section 8 - Giving a component multiple state variables</h2>
          <MultipleStateComponent />
          <h2>Section 9 - State Isolated and Private</h2>
          <StateIsolatedAndPrivate />
          <h2>Section 10 - Setting State Triggers Renders</h2>
          <SettingStateTriggersRender />
          <h2>Section 11 - Copying objects with spread</h2>
          <CopyingObjectsWithSpread />
          <h2>Section 12 - Updating a nested Object</h2>
          <UpdatingNestedObject />
          <h2>Section 13 - Updating Arrays in State</h2>
          <UpdatingArraysInState />
          <h2>Section 14 - Removing From Array</h2>
          <RemovingFromAnArray />
          <h2>Section 15 - Transforming an Array</h2>
          <TransformingAnArray />
          <h2>Section 16 - Replacing Items In An Array</h2>
          <ReplacingItemsInArray />
          <h2>Inserting Into an Array</h2>
          <InsertingIntoArray />
          <h2>Making other changes to an array</h2>
          <MakingOtherChangesToArray />
          <h2>Update object in Array</h2>
          <UpdateObjectInArray />
        </div>

        <div>
          <br />
          <br />
          <h1>Custom Hooks</h1>
          <h2>Countdown Timer</h2>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>

        <div>
          <br />
          <br />
          <h1>Chapter 3 - React State Examples</h1>
          <h2>Section 1 - Reacting to Input with State</h2>
          <h3>Form Submit</h3>
          <FormSubmit />
          <br />
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
