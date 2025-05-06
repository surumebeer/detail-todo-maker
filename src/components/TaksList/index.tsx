import { useAppState } from "@/contexts/AppProvider";
import { TaskItem } from "../TaskItem";

export const TaskList = () => {
  const { task } = useAppState();
  const tasks = Object.values(task.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
