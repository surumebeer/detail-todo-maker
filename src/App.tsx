import { MainTaskList } from "./components/MainTaksList";
import { MainTaskDialog } from "./components/MainTaskFixDialog";
import { MainTaskInput } from "./components/MainTaskInput";
import { useAppState } from "@/contexts/AppProvider";

export const App = () => {
  const { hydrated } = useAppState();
  if (!hydrated) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">TODO App</h1>
      <MainTaskInput />
      <MainTaskList />
      <MainTaskDialog />
    </div>
  );
};
