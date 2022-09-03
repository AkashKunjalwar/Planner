import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CREATE_TASK,
  DELETE_ALL_TASKS_OF_PLANNER,
  GET_PLANNER,
  TOGGLE_STRIKE_TASK,
} from "../../../../../BackendQueries/BackendQueries";
import ValidationFunctionsPlanner from "../../../../../ValidationFunctions/ValidationFunctionsPlanner";
import styles from "./ToDoList.module.css";

const ToDoList_Test = () => {
  const { id } = useParams();
  const [taskInput, setTaskInput] = useState("");
  const { data, refetch } = useQuery(GET_PLANNER, {
    variables: {
      getPlannerId: id,
    },
  });
  const [createTask] = useMutation(CREATE_TASK);
  const [toggleStrike] = useMutation(TOGGLE_STRIKE_TASK);
  const [deleteAllTasksOfPlanner] = useMutation(DELETE_ALL_TASKS_OF_PLANNER);
  const {validateToDoList} = ValidationFunctionsPlanner()

  const taskHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();
    if (taskInput !== "") {
      createTask({
        variables: {
          createTaskId: id,
          task: {
            id: (Math.random() * 10).toFixed(3),
            taskDescription: taskInput,
            shouldStrike: false,
          },
        },
      });
      setTaskInput("");
    }
    setTimeout(() => {
      refetch();
    }, 1000);
  };

  const toggleStrikeHandler = (e) => {
    toggleStrike({
      variables:{
        plannerId: id,
        taskId : {
          id: e.target.id
        }
      }
    })
  };

  const deleteAllHandler = (e) => {
    e.preventDefault();
    deleteAllTasksOfPlanner({
      variables:{
        plannerId: id
      }
    })
  };
  
  return (
    <div id="toDoList" className={styles.toDoListDiv}>
      <h1>To Do List</h1>
      <form className={styles.form}>
        <input
          id="addTaskInput"
          type="text"
          placeholder="Enter your task"
          value={taskInput}
          onChange={taskHandler}
        />
        <button
          id="addTaskButton"
          type="click"
          onClick={taskSubmitHandler}
          onBlur={()=> validateToDoList(data.getPlanner.tasks)}
        >
          Add
        </button>
      </form>
      {
        <>
          <div className={styles.output}>
            <ul>
              {data &&
                data.getPlanner &&
                data.getPlanner.tasks.map((task) => (
                  <li key={task.id}>
                    <span
                      data-shouldstrike={task.shouldStrike}
                      className={
                        task.shouldStrike ? styles.strikeThrough :""
                      }
                      id={task.id}
                      onClick={toggleStrikeHandler}
                    >
                      {task.taskDescription}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <button className={styles.clearAll} onClick={deleteAllHandler}>
            Clear All
          </button>
        </>
      }
    </div>
  );
};

export default ToDoList_Test;
