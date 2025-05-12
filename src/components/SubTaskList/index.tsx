import { useAppState } from "@/contexts/AppProvider";
import { SubTaskItem } from "../SubTaskItem";
import { SubTaskInput } from "../SubTaskInput";

type Props = {
  mainTaskId: string;
  parentId: string | null;
};

export const SubTaskList = ({ parentId, mainTaskId }: Props) => {
  const { subTask } = useAppState().state;

  const subtasks =
    parentId === null
      ? Object.values(subTask.subTasks).filter(
          (sub) => sub.mainTaskId === mainTaskId && sub.parentId === null
        )
      : Object.values(subTask.subTasks).filter(
          (sub) => sub.parentId === parentId && sub.mainTaskId === mainTaskId
        );

  return (
    <ul style={{ marginLeft: "20px" }}>
      {subtasks.map((sub) => (
        <li key={sub.id}>
          <SubTaskItem subtask={sub} />
          {sub.parentId === null && <SubTaskInput task={sub} />}
          <SubTaskList parentId={sub.id} mainTaskId={mainTaskId} />
        </li>
      ))}
    </ul>
  );
};
