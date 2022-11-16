import { useState, Fragment } from "react";
import classes from "./ToggleButton2.module.css";

const ToggleButtons2 = () => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <div>
      <button
        key={1}
        className={active === "1" ? `${classes.active}` : undefined}
        id={"1"}
        onClick={handleClick}
      >
        Solution
      </button>

      <button
        key={2}
        className={active === "2" ? `${classes.active}` : undefined}
        id={"2"}
        onClick={handleClick}
      >
        By
      </button>

      <button
        key={3}
        className={active === "3" ? `${classes.active}` : undefined}
        id={"3"}
        onClick={handleClick}
      >
        Jamal
      </button>
    </div>
  );
};

export default ToggleButtons2;
