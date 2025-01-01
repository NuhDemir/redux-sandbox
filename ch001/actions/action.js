export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: { task: task },
  };
};

export const toggleTask = (id) => {
  return {
    type: "TOGGLE_TASK",
    payload: { id: id },
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: { id: id },
  };
};
