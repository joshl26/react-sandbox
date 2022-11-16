import React, { Component } from "react";
import classes from "./StateButton3.module.css";

class StateButton3 extends Component {
  static defaultProps = {
    courseContent: [
      "JSX",
      "React Props",
      "React State",
      "React Lifecycle Methods",
      "React Event Handlers",
      "React Router",
      "React Hooks",
      "Readux",
      "React Context",
    ],
  };

  constructor(props) {
    super(props);

    // Set initial state
    this.state = { msg: "React Course", content: "" };

    // Binding this keyword
    this.handleClick = this.handleClick.bind(this);
  }

  renderContent() {
    return (
      <div className={classes.container}>
        <ul>
          {this.props.courseContent.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleClick() {
    // Changing state
    this.setState({
      msg: "Course Content",
      content: this.renderContent(),
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>

        <p>{this.state.content}</p>

        {/* Set click handler */}
        <button onClick={this.handleClick}>Click here to know contents!</button>
      </div>
    );
  }
}

export default StateButton3;
