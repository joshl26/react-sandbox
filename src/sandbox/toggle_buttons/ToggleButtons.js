import React from "react";
import classes from "./ToggleButtons.module.css";

const ToggleButtons = ({ label }) => {
  return (
    <div className={classes.container}>
      {label}{" "}
      <div className={classes.toggle_switch}>
        <input
          type="checkbox"
          className={classes.checkbox}
          name={label}
          id={label}
        />
        <label className={classes.label} htmlFor={label}>
          <span className={classes.inner} />
          <span className={classes.switch} />
        </label>
      </div>
    </div>
  );
};

export default ToggleButtons;
