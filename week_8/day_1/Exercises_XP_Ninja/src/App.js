import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: 20 }}>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
