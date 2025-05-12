import { useState, useEffect } from "react";

import { rootReducer, initialAppState } from "../reducers/rootReducer";

import { AppAction, AppState } from "../reducers/types";

import { loadDBData, saveDBData, DB_SCHEMA_NAME } from "../../db";

import { MAIN_TASK_ACTION } from "../reducers/mainTaskReducer/action";
import { SUB_TASK_ACTION } from "../reducers/subTaskReducer/action";

export const useAppPersistence = (
  state: AppState,
  dispatch: React.Dispatch<AppAction>
): boolean => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    loadDBData<AppState>(DB_SCHEMA_NAME).then((loaded) => {
      if (loaded?.mainTask) {
        dispatch({
          type: MAIN_TASK_ACTION.INIT,
          payload: loaded.mainTask.tasks,
        });
      }
      if (loaded?.subTask) {
        dispatch({
          type: SUB_TASK_ACTION.INIT,
          payload: loaded.subTask.subTasks,
        });
      }
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveDBData(DB_SCHEMA_NAME, state);
    }
  }, [state, hydrated]);

  return hydrated;
};
