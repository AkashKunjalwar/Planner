import React, { useEffect } from "react";
import DateAndDiv from "./DateAndDay/DateAndDay";
import PlannerMiddleContent from "./PlannerMiddleContent/PlannerMiddleContent";
import styles from "./Planner.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ValidationFunctionsPlanner from "../../ValidationFunctions/ValidationFunctionsPlanner";
import { useMutation, useQuery} from "@apollo/client";
import { DELETE_PLANNER, GET_PLANNER, SUBMIT_PLANNER } from "../../BackendQueries/BackendQueries";
import { useDispatch } from "react-redux";
import { setDate, setDay, setDayDescription, setId, setWaterGlassCount } from "../../Store/AppStateSlice/appStateSlice";

const Planner = () => {
  const {id} = useParams()
  const [submitPlanner] = useMutation(SUBMIT_PLANNER);
  const [deletePlanner] = useMutation(DELETE_PLANNER)
  const dispatch = useDispatch()
  const {validatePlanner} = ValidationFunctionsPlanner()
  const navigate = useNavigate();
  const {data} = useQuery(GET_PLANNER,{
    variables:{
      getPlannerId: id
    }
  })
  useEffect(()=>{
    if(data && data.getPlanner){
      dispatch(setId(data.getPlanner.id));
      dispatch(setDate(data.getPlanner.date));
      dispatch(setDay(data.getPlanner.day));
      dispatch(setDayDescription(data.getPlanner.dayDescription));
      dispatch(setWaterGlassCount(data.getPlanner.waterGlassCount));
    }
    //eslint-disable-next-line
  },[data])
  const plannerSubmitHandler = (e) => {
    e.preventDefault();
    const dayDescription = document.getElementById("dayDescriptionInput").value;
    const waterGlassCount = document.getElementById("waterTrackerInput").value;
    if(window.confirm("Do you want to submit data")){
      if(validatePlanner(data.getPlanner.tasks, dayDescription,waterGlassCount)){
        submitPlanner({
          variables:{
            submitPlannerId: id,
            planner:{
              dayDescription:dayDescription,
              waterGlassCount:waterGlassCount
            }
          }
        })
        navigate('/');
        dispatch(setId(""));
        dispatch(setDate(""));
        dispatch(setDay(""));
        dispatch(setDayDescription(""));
        dispatch(setWaterGlassCount(""));
      }
    }
  };

  const deletePlannerHandler = e => {
    e.preventDefault();
    if(window.confirm("Do you want to delete the planner?")){
      deletePlanner({
        variables:{
          deletePlannerId: id
        }
      })
      navigate('/');
      dispatch(setId(""));
      dispatch(setDate(""));
      dispatch(setDay(""));
      dispatch(setDayDescription(""));
      dispatch(setWaterGlassCount(""));
    }
  }

  return (
    <form onSubmit={plannerSubmitHandler} className={styles.plannerDiv}>
      <DateAndDiv />
      <PlannerMiddleContent />
      <button type="submit" className={styles.submit}>
        Submit
      </button>
      <button className={styles.delete} onClick={deletePlannerHandler}>Delete</button>
    </form>
  );
};

export default Planner;
