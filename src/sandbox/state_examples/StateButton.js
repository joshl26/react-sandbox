import React, { useState } from "react";
import classes from "./StateButton.module.css";

const StateButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default StateButton;
