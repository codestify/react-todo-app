import React from 'react'
import AddNewTodo from './AddNewTodo';
import Toggle from './Toggle';
import TodoList from './TodoList';
import Footer from './Footer';

import "./App.css";

const todoItems = [

  {
      "id": 887258856,
      "title": "React training",
      "completed": false,
  },
  {
      "id": 887258866,
      "title": "Go for a run",
      "completed": true,
  },
  {
      "id": 887258876,
      "title": "Listen to some music",
      "completed": true,
  }

];


function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddNewTodo />
      </header>
      <div className="main">
        <Toggle />
        <TodoList todoItems={todoItems} />
      </div>
     <Footer />
    </div>
  );
}

export default App;
