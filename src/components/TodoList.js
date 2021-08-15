import React from "react";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Test JavaScript</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" />
      </li>
    </ul>
  );
};

export default TodoList;
