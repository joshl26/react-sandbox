import classes from "./ToggleButton2.module.css";
import { useState } from "react";

const updateState = (props) => {
  console.log(props.target.label);
};

const ToggleButtons2 = () => {
  return (
    <div className={classes.container}>
      <button
        label="one"
        onClick={updateState}
        className={classes.btn_inactive}
      >
        One
      </button>
      <button onClick={updateState} className={classes.btn_inactive}>
        Two
      </button>
      <button onClick={updateState} className={classes.btn_inactive}>
        Three
      </button>
    </div>
  );
};

export default ToggleButtons2;
