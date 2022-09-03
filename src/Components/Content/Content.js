import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CREATE_NEW_PLANNER,
  DELETE_ALL_PLANNERS,
  GET_ALL_PLANNERS,
} from "../../BackendQueries/BackendQueries";
import ValidationFunctionsPlanner from "../../ValidationFunctions/ValidationFunctionsPlanner";
import styles from "./Content.module.css";

const Content = () => {
  const [date, setDate] = useState("");
  const { validateDate } = ValidationFunctionsPlanner();
  const { data, refetch } = useQuery(GET_ALL_PLANNERS);
  const [createPlanner] = useMutation(CREATE_NEW_PLANNER);
  const [deleteAllPlanners] = useMutation(DELETE_ALL_PLANNERS);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const setDateHandler = (e) => {
    setDate(e.target.value);
  };

  const createNewPlanner = async (e) => {
    e.preventDefault();
    if (validateDate(date)) {
      let day = new Date(date).toString().split(" ")[0];
      const response = await createPlanner({
        variables: {
          date: date,
          day: day,
        },
      });
      navigate(`/createplanner/${response.data.createPlanner.id}`);
    }
  };

  return (
    <div className={styles.contentDiv}>
      {data && data.getAllPlanners.length > 0 && (
        <div className={styles.eachPlanner}>
          <input value="Delete All Planners here" disabled />
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              deleteAllPlanners();
              refetch();
            }}
          >
            Clear All
          </button>
        </div>
      )}
      <form className={styles.eachPlanner} onSubmit={createNewPlanner}>
        <input
          id="dateInput"
          type="date"
          value={date}
          onChange={setDateHandler}
        />
        <button type="submit">+ Planner</button>
      </form>
      {data &&
        data.getAllPlanners.map((each) => (
          <div key={each.id} className={styles.eachPlanner}>
            <input
              className={styles.createdPlanners}
              id="dateInput"
              type="text"
              value={each.date}
              disabled
            />
            <button onClick={() => navigate(`/updateplanner/${each.id}`)}>
              Update
            </button>
          </div>
        ))}
    </div>
  );
};

export default Content;
