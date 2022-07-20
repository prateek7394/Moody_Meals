import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const[amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // Here amountInputRef.current points to the input element which is stored in that ref
    const enteredAmountNumber = +enteredAmount;
    // we added + because value of input element is always a string

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
      // In this case submitHandler function is not executed
    ) {
      setAmountIsValid(false);
      // Here setAmountIsValid is used to show some error message below the button
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    // onAddToCart is used to pass the valid amount to MealItem component
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please enter a valid amount(between 1-5)</p>}
    </form>
  );
};
export default MealItemForm;
