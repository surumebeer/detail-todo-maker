import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TaskList } from "./components/TaksList";
import { useAppDispatch } from "./contexts/AppProvider";
import { Task } from "@/types/Task";

export const App = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTask: Task = {
        id: uuidv4(),
        title: input.trim(),
        description: "",
        feasibilityCheck: {
          isConcrete: false,
          hasTrigger: false,
          timeBounded: false,
          hasClearOutcome: false,
          hasEmotionalBlock: false,
        },
        completionCriteria: "",
        expectedDuration: 30, // 仮値
        status: "incomplete",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      dispatch({ type: "ADD_TASK", payload: newTask });
      setInput("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">TODO App</h1>
      <div className="mb-4 flex gap-2">
        <input
          className="border px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="bg-blue-500 text-white px-3 py-1" onClick={addTodo}>
          Add
        </button>
      </div>
      <TaskList />
    </div>
  );
};
