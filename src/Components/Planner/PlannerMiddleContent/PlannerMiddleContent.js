import React from "react";
import LeftSidePlanner from "./LeftSidePlanner/LeftSidePlanner";
import RightSidePlanner from "./RightSidePlanner/RightSidePlanner";
import styles from "../Planner.module.css";

const PlannerMiddleContent = () => {
  return (
    <div className={styles.plannerMiddleContent}>
      <LeftSidePlanner />
      <RightSidePlanner />
    </div>
  );
};

export default PlannerMiddleContent;
