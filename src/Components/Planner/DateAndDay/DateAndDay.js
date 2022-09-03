import React from "react";
import { useSelector } from "react-redux";
import styles from "./DateAndDay.module.css";

const DateAndDiv = () => {
  const {date, day} = useSelector(state=>state.appStateReducer)
  return (
    <div className={styles.dateAndDayDiv}>
      <div className={styles.dateDiv}>
        <label>Date: </label>
        <input
          id="calendar"
          type="text"
          value={date}
          disabled
        />
      </div>
      <div className={styles.dayDiv}>
        <label htmlFor="dayLabel">Day: </label>
        <input type="text" name="dayLabel" disabled value={day} />
      </div>
    </div>
  );
};

export default DateAndDiv;