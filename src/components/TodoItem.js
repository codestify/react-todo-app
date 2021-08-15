import React, {useState} from "react";

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, onStatusToggled }) => {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)

  const handleDelete = todo => {
    onDeleteTodo(todo)
  }

  const onDoubleClick = (e) => {
    if(e.detail >= 2){
      setEditing(!editing)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateTodo(title, todo)
    setEditing(false)
  }

  const handleOnChecked = e => {
    onStatusToggled(e.target.checked, todo)
  }

  const completedClass = todo.completed ? 'completed' : ''
  const editingClass = editing ? 'editing' : ''

  return (
    <li className={`${completedClass} ${editingClass}` } onClick={onDoubleClick}>
      <div className="view">
        <input
           checked={todo.completed}
           className="toggle"
           type="checkbox"
           onChange={handleOnChecked}
        />
        <label>{todo.title}</label>
        <button className="destroy" onClick={(e) => handleDelete(todo)}></button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="edit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>

    </li>
  );
};

export default TodoItem;
