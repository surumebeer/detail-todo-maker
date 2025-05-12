import {
  MainTaskState,
  MainTaskAction,
} from "@/contexts/reducers/mainTaskReducer/types";

import {
  SubTaskState,
  SubTaskAction,
} from "@/contexts/reducers/subTaskReducer/types";

export type AppState = {
  mainTask: MainTaskState;
  subTask: SubTaskState;
};

export type AppStateContextValue = {
  state: AppState;
  hydrated: boolean;
};

export type AppAction = MainTaskAction | SubTaskAction;
