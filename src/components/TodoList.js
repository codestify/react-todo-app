import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems }) => {
  return (
    <ul className="todo-list">
      {todoItems.map((todo) => (
        <TodoItem
           key={todo.id}
           todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
