import { SubTask } from "@/types/Task";

import { SUB_TASK_ACTION } from "./action";

export type SubTaskState = {
  subTasks: Record<string, SubTask>;
};

export type SubTaskAction =
  | { type: typeof SUB_TASK_ACTION.ADD; payload: SubTask }
  | { type: typeof SUB_TASK_ACTION.UPDATE; payload: SubTask }
  | { type: typeof SUB_TASK_ACTION.DELETE; payload: SubTask }
  | { type: typeof SUB_TASK_ACTION.INIT; payload: Record<string, SubTask> };
