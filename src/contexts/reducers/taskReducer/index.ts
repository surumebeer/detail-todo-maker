import { Task } from "@/types/Task";

export type TaskState = {
  tasks: Record<string, Task>;
};

const initialTaskState: TaskState = {
  tasks: {},
};

export type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "INIT_TASKS"; payload: Record<string, Task> };

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TASK":
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload,
        },
      };
    case "DELETE_TASK": {
      const newTasks = { ...state.tasks };
      delete newTasks[action.payload];
      return { ...state, tasks: newTasks };
    }
    case "INIT_TASKS":
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export { initialTaskState, taskReducer };
