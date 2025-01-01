import * as actionTypes from "../actions/actionTypes";
let id = 0;

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case actionTypes.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case actionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, task: action.payload.task }
          : task
      );
    default:
  }
}
