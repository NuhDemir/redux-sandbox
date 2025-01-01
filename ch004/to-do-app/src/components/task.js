import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../context/storeContext";
import store from "../store/configureStore";
import { loadTasks } from "../store/tasks";

const Task = () => {
  const [tasks, setTasks] = React.useState([store.getState().tasks.tasks]);
  useEffect(() => {
    store.dispatch(loadTasks());
  });

  console.log(tasks);
  return <div>Task</div>;
};

export default Task;
