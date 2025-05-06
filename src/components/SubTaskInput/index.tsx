import { useState } from "react";
import { useAppDispatch } from "@/contexts/AppProvider";
import { v4 as uuidv4 } from "uuid";

import { Task, SubTask } from "@/types/Task";

type Props =
  | {
      task: SubTask;
    }
  | {
      task: Task;
    };

function isArgsSubTask(task: Task | SubTask): task is SubTask {
  return "mainTaskId" in task;
}

export const SubTaskInput = ({ task }: Props) => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const addSubTask = () => {
    if (input.trim() === "") return;

    const newSubTask = isArgsSubTask(task)
      ? {
          ...task,
          id: uuidv4(),
          title: input,
          completed: false,
          parentId: task.id,
          mainTaskId: task.mainTaskId ? task.mainTaskId : task.id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      : {
          id: uuidv4(),
          title: input,
          completed: false,
          parentId: null,
          mainTaskId: task.id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

    // Dispatch action to add subtask
    dispatch({ type: "ADD_SUB_TASK", payload: newSubTask });

    setInput("");
  };

  return (
    <div>
      <input
        className="border px-2 py-1 text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add subtask..."
      />
      <button
        className="bg-green-500 text-white px-2 py-1 text-sm"
        onClick={addSubTask}
      >
        Add
      </button>
    </div>
  );
};
