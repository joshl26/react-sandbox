import React, { Component } from "react";
import classes from "./StateButton2.module.css";

class StateButton2 extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { greeting: "Click the button to receive greetings" };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // Changing state
    this.setState({ greeting: "GeeksForGeeks welcomes you !!" });
  }

  render() {
    return (
      <div className={classes.container}>
        <p>{this.state.greeting}</p>

        {/* Set click handler */}
        <button onClick={this.updateState}>Click me!</button>
      </div>
    );
  }
}

export default StateButton2;
