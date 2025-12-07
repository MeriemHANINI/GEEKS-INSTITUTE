import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const { dispatch, state } = useContext(TaskContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Enhanced Task Manager</h1>

      <TaskForm />

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "all" })}
        >
          All
        </button>

        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "active" })}
        >
          Active
        </button>

        <button
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: "completed" })}
        >
          Completed
        </button>
      </div>

      <TaskList />
    </div>
  );
}
