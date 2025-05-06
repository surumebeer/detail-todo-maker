import { Task } from "@/types/Task";
import { SubTaskList } from "@/components/SubTaskList";
import { SubTaskInput } from "../SubTaskInput";

type Props = {
  task: Task;
};

export const TaskItem = ({ task }: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <SubTaskInput task={task} />
      <SubTaskList parentId={null} mainTaskId={task.id} />
    </div>
  );
};
