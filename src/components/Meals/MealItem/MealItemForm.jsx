import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    let amountRaw = amountRef.current.value;
    let amount = +amountRaw;
    if (amount < 0 || amount === 0 || amount > 5 || amount < 1) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    props.amountSubmitHandler(amount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          step: 1,
        }}
      />
      <button> + Add</button>
      {!isFormValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
