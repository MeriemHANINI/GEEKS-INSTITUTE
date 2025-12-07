import { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCount(length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Character Counter</h2>

      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type here..."
        style={{ padding: "10px", width: "250px" }}
      />

      <p>Characters: {count}</p>
    </div>
  );
}

export default CharacterCounter;
