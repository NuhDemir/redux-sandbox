import * as actionTypes from "./actionTypes";

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: { task: task },
  };
};

export const toggleTask = (id) => {
  return {
    type: actionTypes.TOGGLE_TASK,
    payload: { id: id },
  };
};

export const deleteTask = (id) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: { id: id },
  };
};
