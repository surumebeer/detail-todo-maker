import { MainTask } from "@/types/Task";

import { MAIN_TASK_ACTION } from "./action";

export type MainTaskState = {
  tasks: Record<string, MainTask>;
};

export type MainTaskAction =
  | { type: typeof MAIN_TASK_ACTION.ADD; payload: MainTask }
  | { type: typeof MAIN_TASK_ACTION.UPDATE; payload: MainTask }
  | { type: typeof MAIN_TASK_ACTION.DELETE; payload: string }
  | { type: typeof MAIN_TASK_ACTION.INIT; payload: Record<string, MainTask> };
