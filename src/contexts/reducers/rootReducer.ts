import { initialMainTaskState, mainTaskReducer } from "./mainTaskReducer";
import { MainTaskAction } from "./mainTaskReducer/types";

import { initialSubTaskState, subTaskReducer } from "./subTaskReducer";
import { SubTaskAction } from "./subTaskReducer/types";

import { AppAction, AppState } from "./types";

export const initialAppState: AppState = {
  mainTask: initialMainTaskState,
  subTask: initialSubTaskState,
};

export const rootReducer = (state: AppState, action: AppAction): AppState => {
  return {
    mainTask: mainTaskReducer(state.mainTask, action as MainTaskAction),
    subTask: subTaskReducer(state.subTask, action as SubTaskAction),
  };
};
