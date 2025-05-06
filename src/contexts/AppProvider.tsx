import {
  createContext,
  useReducer,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

import {
  rootReducer,
  initialAppState,
  AppState,
  AppAction,
} from "./reducers/rootReducer";

import { loadDBData, saveDBData, DB_SCHEMA_NAME } from "../db";

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch<AppAction> | undefined>(
  undefined
);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialAppState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    loadDBData<AppState>(DB_SCHEMA_NAME).then((loaded) => {
      if (loaded?.task) {
        dispatch({ type: "INIT_TASKS", payload: loaded.task.tasks });
      }
      if (loaded?.task) {
        dispatch({ type: "INIT_SUB_TASKS", payload: loaded.subTask.subTasks });
      }
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveDBData(DB_SCHEMA_NAME, state);
    }
  }, [state, hydrated]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppProvider");
  return ctx;
};

export const useAppDispatch = () => {
  const ctx = useContext(AppDispatchContext);
  if (!ctx) throw new Error("useAppDispatch must be used within AppProvider");
  return ctx;
};
