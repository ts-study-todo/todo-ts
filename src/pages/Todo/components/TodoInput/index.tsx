import { useState } from "react";

function TodoInput() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onChange={onChange}
      value={value}
    />
  );
}

export default TodoInput;
