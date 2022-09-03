import { gql } from "@apollo/client";

const GET_PLANNER = gql`
  query GetPlanner($getPlannerId: ID) {
    getPlanner(id: $getPlannerId) {
      id
      date
      day
      tasks {
        id
        shouldStrike
        taskDescription
      }
      dayDescription
      waterGlassCount
    }
  }
`;

const GET_ALL_PLANNERS = gql`
  query GetAllPlanners {
    getAllPlanners {
      id
      date
      day
      tasks {
        id
        shouldStrike
        taskDescription
      }
      dayDescription
      waterGlassCount
    }
  }
`;

const CREATE_NEW_PLANNER = gql`
  mutation CreatePlannerId($date: String, $day: String) {
    createPlanner(date: $date, day: $day) {
      id
      date
      day
    }
  }
`;

const CREATE_TASK = gql`
  mutation CreateTask($createTaskId: ID, $task: TaskInput) {
    createTask(id: $createTaskId, task: $task) {
      tasks {
        id
        shouldStrike
        taskDescription
      }
    }
  }
`;

const TOGGLE_STRIKE_TASK = gql`
  mutation ToggleStrikeTask($plannerId: ID, $taskId: TaskIdInput) {
    toggleStrike(id: $plannerId, taskId: $taskId) {
      id
      date
      day
      tasks {
        id
        taskDescription
        shouldStrike
      }
      dayDescription
      waterGlassCount
    }
  }
`;

const DELETE_ALL_TASKS_OF_PLANNER = gql`
  mutation DeleteAllTasksOfPlanner($plannerId: ID) {
    deleteAllTasksOfPlanner(id: $plannerId) {
      id
      date
      day
      tasks {
        id
        shouldStrike
        taskDescription
      }
      dayDescription
      waterGlassCount
    }
  }
`;

const SUBMIT_PLANNER = gql`
  mutation SubmitPlanner($submitPlannerId: ID, $planner: SubmitPlannerInput) {
    submitPlanner(id: $submitPlannerId, planner: $planner) {
      id
      date
      day
      tasks {
        id
        shouldStrike
        taskDescription
      }
      dayDescription
      waterGlassCount
    }
  }
`;

const DELETE_PLANNER = gql`
  mutation DeletePlanner($deletePlannerId: ID) {
    deletePlanner(id: $deletePlannerId)
  }
`;

const DELETE_ALL_PLANNERS = gql`
  mutation DeleteAllPlanners {
    deleteAllPlanners
  }
`;

export {
  GET_PLANNER,
  GET_ALL_PLANNERS,
  CREATE_NEW_PLANNER,
  CREATE_TASK,
  TOGGLE_STRIKE_TASK,
  DELETE_ALL_TASKS_OF_PLANNER,
  SUBMIT_PLANNER,
  DELETE_PLANNER,
  DELETE_ALL_PLANNERS
};
