import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

import { rootReducer, initialAppState } from "./reducers/rootReducer";

import { AppAction, AppStateContextValue } from "./reducers/types";

import { useAppPersistence } from "./useAppPersistance";

export { MAIN_TASK_ACTION } from "./reducers/mainTaskReducer/action";
export { SUB_TASK_ACTION } from "./reducers/subTaskReducer/action";

const AppStateContext = createContext<AppStateContextValue | undefined>(
  undefined
);
const AppDispatchContext = createContext<Dispatch<AppAction> | undefined>(
  undefined
);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialAppState);

  const hydrated = useAppPersistence(state, dispatch);

  return (
    <AppStateContext.Provider value={{ state, hydrated }}>
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
