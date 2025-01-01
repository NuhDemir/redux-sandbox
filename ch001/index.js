import store from "./reducers/store";
import { addTask, deleteTask, toggleTask } from "./actions/action";

const unsubscribe = store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

store.dispatch(addTask("Learn Redux")); // [ { id: 1, task: 'Learn Redux', completed: false } ]
store.dispatch(addTask("Learn React")); // [ { id: 1, task: 'Learn Redux', completed: false }, { id: 2, task: 'Learn React', completed: false } ]

unsubscribe();

console.log("Before toggle:", store.getState());
store.dispatch(toggleTask(1)); // [ { id: 1, task: 'Learn Redux', completed: true }, { id: 2, task: 'Learn React', completed: false } ]
console.log("After toggle:", store.getState());
