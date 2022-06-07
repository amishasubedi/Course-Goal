import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true); // indicator to check if user entered valid input or not in add goals

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim.length > 0) {
      // to remove invalid css styling after entering valid user input
      setIsValid(true); //
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Before triggering Add Goal button, check if the entered value is empty or not
    if (enteredValue.trim().length === 0) {
      //return; // cannot add empty goals - but it does not give user any feedback so do that add extra state
      setIsValid(false); // - now work on style adjustment
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // In line 37, 41,42 - making some CSS style adjustment based on valid and invalid user input
  // In line 35 either form control or form control invalid depending on users input - dynamically adding
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "black",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
