import { SubTaskAction, SubTaskState } from "./types";

import { SUB_TASK_ACTION } from "./action";

const initialSubTaskState: SubTaskState = {
  subTasks: {},
};

const subTaskReducer = (
  state: SubTaskState,
  action: SubTaskAction
): SubTaskState => {
  switch (action.type) {
    case SUB_TASK_ACTION.ADD:
    case SUB_TASK_ACTION.UPDATE:
      return {
        ...state,
        subTasks: {
          ...state.subTasks,
          [action.payload.id]: action.payload,
        },
      };
    case SUB_TASK_ACTION.DELETE: {
      const { id } = action.payload;
      const newSubTasks = { ...state.subTasks };
      if (action.payload.parentId === null) {
        delete newSubTasks[id];
      } else {
      }
      return { ...state, subTasks: newSubTasks };
    }
    case SUB_TASK_ACTION.INIT:
      return { ...state, subTasks: action.payload };
    default:
      return state;
  }
};

export { initialSubTaskState, subTaskReducer };
