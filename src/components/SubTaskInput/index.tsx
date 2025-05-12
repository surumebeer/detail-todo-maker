import { useState } from "react";
import { SUB_TASK_ACTION, useAppDispatch } from "@/contexts/AppProvider";
import { v4 as uuidv4 } from "uuid";

import { MainTask, SubTask } from "@/types/Task";

type Props =
  | {
      task: SubTask;
    }
  | {
      task: MainTask;
    };

function isArgsSubTask(task: MainTask | SubTask): task is SubTask {
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

    dispatch({ type: SUB_TASK_ACTION.ADD, payload: newSubTask });

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
