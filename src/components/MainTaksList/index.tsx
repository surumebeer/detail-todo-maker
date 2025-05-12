import { useAppState } from "@/contexts/AppProvider";
import { TaskItem } from "../TaskItem";

export const MainTaskList = () => {
  const { mainTask } = useAppState().state;
  const tasks = Object.values(mainTask.tasks);

  return (
    <div>
      {tasks.map((mainTask) => (
        <TaskItem key={mainTask.id} mainTask={mainTask} />
      ))}
    </div>
  );
};
