import {
  initialTaskState,
  taskReducer,
  TaskState,
  TaskAction,
} from "./taskReducer";
import {
  initialSubTaskState,
  subTaskReducer,
  SubTaskState,
  SubTaskAction,
} from "./subTaskReducer";

export type AppState = {
  task: TaskState;
  subTask: SubTaskState;
};

export type AppAction = TaskAction | SubTaskAction;

export const initialAppState: AppState = {
  task: initialTaskState,
  subTask: initialSubTaskState,
};

export const rootReducer = (state: AppState, action: AppAction): AppState => {
  return {
    task: taskReducer(state.task, action as unknown as TaskAction),
    subTask: subTaskReducer(state.subTask, action as unknown as SubTaskAction),
  };
};
