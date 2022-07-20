import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // Above ref is that which is used in Input component
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* Above ref is used to pass Input component to MealItemForm */}
      {/* All the props associated with input object are extracted using Spread operator */}
    </div>
  );
});

export default Input;
