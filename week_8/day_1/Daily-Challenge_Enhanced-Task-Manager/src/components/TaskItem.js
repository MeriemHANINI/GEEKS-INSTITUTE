import { useState, useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();

  const handleSave = () => {
    const newText = editRef.current.value.trim();
    if (newText !== "") {
      dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: newText } });
    }
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />

      {isEditing ? (
        <>
          <input defaultValue={task.text} ref={editRef} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
            onClick={() => setIsEditing(true)}
          >
            {task.text}
          </span>
        </>
      )}

      <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
        Delete
      </button>
    </li>
  );
}
