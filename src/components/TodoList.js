import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, onDeleteTodo, onUpdateTodo, onStatusToggled }) => {
  return (
    <ul className="todo-list">
      {todoItems.map((todo) => (
        <TodoItem
           key={todo.id}
           todo={todo}
           onDeleteTodo={onDeleteTodo}
           onUpdateTodo={onUpdateTodo}
           onStatusToggled={onStatusToggled}
        />
      ))}
    </ul>
  );
};

export default TodoList;
