import React from "react";
import ToDoList from "./ToDoList/ToDoList";
import styles from "../../Planner.module.css";

const LeftSidePlanner = () => {
  return (
    <div className={styles.leftSidePlanner}>
      <ToDoList />
    </div>
  );
};

export default LeftSidePlanner;
