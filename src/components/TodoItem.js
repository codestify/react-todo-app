import React from "react";

const TodoItem = ({ todo }) => {
  const completedClass = todo.completed ? 'completed' : ''
  return (
    <li className={completedClass}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todo.title}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" />
    </li>
  );
};

export default TodoItem;
