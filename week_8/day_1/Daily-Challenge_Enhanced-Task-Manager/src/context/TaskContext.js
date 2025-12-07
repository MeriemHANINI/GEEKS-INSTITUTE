import { createContext, useReducer } from "react";
import { taskReducer, initialState } from "./taskReducer";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === "active") return !task.completed;
    if (state.filter === "completed") return task.completed;
    return true;
  });

  return (
    <TaskContext.Provider value={{ state, dispatch, filteredTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
