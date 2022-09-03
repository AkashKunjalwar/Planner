import { useQuery } from "@apollo/client";
import { GET_ALL_PLANNERS } from "../BackendQueries/BackendQueries";
import styles from "./ValidationFunctions.module.css";

const ValidationFunctionsPlanner = () => {
  const { data } = useQuery(GET_ALL_PLANNERS);
  const validateDate = (date) => {
    let dateArray = data && data.getAllPlanners.length>0 && data.getAllPlanners.map((planner) => planner.date);
    if (dateArray && dateArray.includes(date)) {
      document.getElementById("dateInput").classList.add(styles.errorInput);
      alert("The Planner with mentioned date exists");
      return false;
    } else if (date.trim() === "") {
      document.getElementById("dateInput").classList.add(styles.errorInput);
      alert("The Date field is required and cannot be empty");
      return false;
    } else {
      document.getElementById("dateInput").classList.remove(styles.errorInput);
      return true;
    }
  };

  const validateToDoList = (tasks) => {
    if (tasks.length < 1) {
      document.getElementById("toDoList").classList.add(styles.errorInput);
      alert("To Do List is a required field and cannot be empty");
      return false;
    } else {
      document.getElementById("toDoList").classList.remove(styles.errorInput);
      return true;
    }
  };

  const validateDayDescription = (dayDescription) => {
    if (dayDescription.trim() === "") {
      document
        .getElementById("dayDescriptionInput")
        .classList.add(styles.errorInput);
      alert("How Was The Day is a required field and cannot be empty");
      return false;
    } else {
      document
        .getElementById("dayDescriptionInput")
        .classList.remove(styles.errorInput);
      return true;
    }
  };

  const validateWaterGlassCount = (waterGlassCount) => {
    if (waterGlassCount === "select" || waterGlassCount === "") {
      document
        .getElementById("waterTrackerInput")
        .classList.add(styles.errorInput);
      alert("Water Tracker is a required field and cannot be empty");
      return false;
    } else {
      document
        .getElementById("waterTrackerInput")
        .classList.remove(styles.errorInput);
      return true;
    }
  };

  const validatePlanner = (
    tasks,
    dayDescription,
    waterGlassCount
  ) => {
    if (
      validateToDoList(tasks) &&
      validateDayDescription(dayDescription) &&
      validateWaterGlassCount(waterGlassCount)
    )
      return true;
    else return false;
  };

  return {
    validateDate,
    validateToDoList,
    validateDayDescription,
    validateWaterGlassCount,
    validatePlanner,
  };
};

export default ValidationFunctionsPlanner;
