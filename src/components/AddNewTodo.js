import React, { useState } from "react";

const AddNewTodo = ({onAddTodo}) => {
  const [title,setTitle] = useState('')

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onAddTodo(title);
      setTitle('')
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={handleEnter}
      autoFocus
    />
  );
};

export default AddNewTodo;
