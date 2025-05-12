// タスクの状態チェック
export type FeasibilityCheck = {
  isConcrete: boolean;
  hasTrigger: boolean;
  timeBounded: boolean;
  hasClearOutcome: boolean;
  hasEmotionalBlock: boolean;
};

// 感情的ブロック（ある場合）
export type EmotionBlock = {
  reason: string;
  note?: string;
};

// 子タスク
export type SubTask = {
  id: string;
  title: string;
  completed: boolean;
  parentId: string | null;
  mainTaskId: string;
  createdAt: string;
  updatedAt: string;
};

// メインタスク
export type MainTask = {
  id: string;
  title: string;
  description: string;
  expectedDuration: number;
  dueDate?: string;
  completionCriteria: string;
  status: "ready" | "incomplete" | "completed";
  feasibilityCheck: FeasibilityCheck;
  emotionBlock?: EmotionBlock;
  createdAt: string;
  updatedAt: string;
};
