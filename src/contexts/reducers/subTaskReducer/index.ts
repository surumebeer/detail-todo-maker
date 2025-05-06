import { SubTask } from "@/types/Task";

import { getAllDescendantSubtaskIds } from "@/lib/getAllDescendantSubtaskIds";

export type SubTaskState = {
  subTasks: Record<string, SubTask>;
};

const initialSubTaskState: SubTaskState = {
  subTasks: {},
};

export type SubTaskAction =
  | { type: "ADD_SUB_TASK"; payload: SubTask }
  | { type: "UPDATE_SUB_TASK"; payload: SubTask }
  | { type: "DELETE_SUB_TASK"; payload: SubTask }
  | { type: "INIT_SUB_TASKS"; payload: Record<string, SubTask> };

const subTaskReducer = (
  state: SubTaskState,
  action: SubTaskAction
): SubTaskState => {
  switch (action.type) {
    case "ADD_SUB_TASK":
    case "UPDATE_SUB_TASK":
      return {
        ...state,
        subTasks: {
          ...state.subTasks,
          [action.payload.id]: action.payload,
        },
      };
    case "DELETE_SUB_TASK": {
      const { id } = action.payload;
      const newSubTasks = { ...state.subTasks };
      if (action.payload.parentId === null) {
        delete newSubTasks[id];
      } else {
      }
      return { ...state, subTasks: newSubTasks };
    }
    case "INIT_SUB_TASKS":
      return { ...state, subTasks: action.payload };
    default:
      return state;
  }
};

export { initialSubTaskState, subTaskReducer };
