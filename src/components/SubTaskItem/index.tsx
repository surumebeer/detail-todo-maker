import { SubTask } from "@/types/Task";
import { SUB_TASK_ACTION, useAppDispatch } from "@/contexts/AppProvider";

type Props = {
  subtask: SubTask;
};

export const SubTaskItem = ({ subtask }: Props) => {
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch({
      type: SUB_TASK_ACTION.UPDATE,
      payload: {
        ...subtask,
        completed: !subtask.completed,
        updatedAt: new Date().toISOString(),
      },
    });
  };

  const deleteSubTask = () => {
    dispatch({
      type: SUB_TASK_ACTION.DELETE,
      payload: subtask,
    });
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={subtask.completed} onChange={toggle} />
        {subtask.title}
        <button onClick={deleteSubTask}>delete</button>
      </label>
    </div>
  );
};
