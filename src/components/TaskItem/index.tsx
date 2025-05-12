import { MainTask } from "@/types/Task";
import { SubTaskList } from "@/components/SubTaskList";
import { SubTaskInput } from "../SubTaskInput";

type Props = {
  mainTask: MainTask;
};

export const TaskItem = ({ mainTask }: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
      }}
    >
      <h3>{mainTask.title}</h3>
      <p>{mainTask.description}</p>
      <SubTaskInput task={mainTask} />
      <SubTaskList parentId={null} mainTaskId={mainTask.id} />
    </div>
  );
};
