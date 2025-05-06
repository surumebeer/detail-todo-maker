// context/types.ts
export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
};

export type AppState = {
  todo: TodoState;
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: { title: string } }
  | { type: "TOGGLE_TODO"; payload: { id: string } }
  | { type: "INIT_TODOS"; payload: Todo[] };

export type AppAction = TodoAction;
