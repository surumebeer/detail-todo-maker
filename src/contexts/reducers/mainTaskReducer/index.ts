import { MainTaskState, MainTaskAction } from "./types";

import { MAIN_TASK_ACTION } from "./action";

const initialMainTaskState: MainTaskState = {
  tasks: {},
};

const mainTaskReducer = (
  state: MainTaskState,
  action: MainTaskAction
): MainTaskState => {
  switch (action.type) {
    case MAIN_TASK_ACTION.ADD:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload,
        },
      };
    case MAIN_TASK_ACTION.UPDATE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload,
        },
      };
    case MAIN_TASK_ACTION.DELETE: {
      const newTasks = { ...state.tasks };
      delete newTasks[action.payload];
      return { ...state, tasks: newTasks };
    }
    case MAIN_TASK_ACTION.INIT:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export { initialMainTaskState, mainTaskReducer };
