import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <li style={{ marginBottom: 10 }}>
      <span
        onClick={() =>
          dispatch({ type: "TOGGLE_TASK", payload: task.id })
        }
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: 10
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE_TASK", payload: task.id })
        }
      >
        Remove
      </button>
    </li>
  );
}
