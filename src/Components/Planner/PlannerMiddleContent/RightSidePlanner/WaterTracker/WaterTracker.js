import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWaterGlassCount } from "../../../../../Store/AppStateSlice/appStateSlice";
import ValidationFunctionsPlanner from "../../../../../ValidationFunctions/ValidationFunctionsPlanner";
import styles from "./WaterTracker.module.css";

const WaterTracker = () => {
  const {waterGlassCount} = useSelector(state=>state.appStateReducer)
  const dispatch = useDispatch()
  const { validateWaterGlassCount } = ValidationFunctionsPlanner();

  const selectWaterCountHandler = (e) => {
    dispatch(setWaterGlassCount(e.target.value))
  };

  const validationOfWaterTracker = (e) =>{
    validateWaterGlassCount(e.target.value);
  }

  return (
    <div className={styles.waterTrackerDiv}>
      <h1>Water Tracker</h1>
      <label>Number of glasses of water had: </label>
      <select
        id="waterTrackerInput"
        className={styles.select}
        value={waterGlassCount}
        onChange={selectWaterCountHandler}
        onBlur={validationOfWaterTracker}
      >
        <option value="select">select</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="8+">8+</option>
      </select>
    </div>
  );
};

export default WaterTracker;
