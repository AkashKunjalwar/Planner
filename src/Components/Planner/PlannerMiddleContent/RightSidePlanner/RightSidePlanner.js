import React from "react";
import WaterTracker from "./WaterTracker/WaterTracker";
import HowWasTheDay from "./HowWasTheDay/HowWasTheDay";
import styles from "../../Planner.module.css";

const RightSidePlanner = () => {
  return (
    <div className={styles.rightSidePlanner}>
      <HowWasTheDay />
      <WaterTracker />
    </div>
  );
};

export default RightSidePlanner;
