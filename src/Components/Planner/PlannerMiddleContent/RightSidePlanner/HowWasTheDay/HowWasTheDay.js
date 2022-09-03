import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ValidationFunctionsPlanner from "../../../../../ValidationFunctions/ValidationFunctionsPlanner";
import styles from "./HowWasTheDay.module.css";
import { setDayDescription } from "../../../../../Store/AppStateSlice/appStateSlice";

const HowWasTheDay = () => {  
  const dispatch = useDispatch()
  const {dayDescription} = useSelector(state=>state.appStateReducer)
  const { validateDayDescription } = ValidationFunctionsPlanner();

  const dayDescriptionHandler = (e) => {
    dispatch(setDayDescription(e.target.value))
  };

  const validationOfDayDescription = (e) =>{
    validateDayDescription(e.target.value);
  }
  
  return (
    <div className={styles.howWasTheDayForm}>
      <h1>How Was The Day</h1>
      <textarea
        id="dayDescriptionInput"
        rows="10"
        value={dayDescription}
        onChange={dayDescriptionHandler}
        onBlur={validationOfDayDescription}
      />
    </div>
  );
};

export default HowWasTheDay;
