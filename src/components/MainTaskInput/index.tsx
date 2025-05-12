import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MAIN_TASK_ACTION, useAppDispatch } from "@/contexts/AppProvider";
import { MainTask } from "@/types/Task";

export const MainTaskInput = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [criteria, setCriteria] = useState("");

  const addTodo = () => {
    if (title.trim()) {
      const newTask: MainTask = {
        id: uuidv4(),
        title: title.trim(),
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

      dispatch({ type: MAIN_TASK_ACTION.ADD, payload: newTask });
      setTitle("");
      setCriteria("");
    }
  };
  return (
    <div className="grid gap-3 mb-6">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Main task title"
      />
      <Input
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        placeholder="Completion criteria (e.g. 'Mock done', 'Reviewed')"
      />
      <Button onClick={addTodo}>Add Task</Button>
    </div>
  );
};
