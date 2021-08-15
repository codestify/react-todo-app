import React from 'react'
import AddNewTodo from './AddNewTodo';
import Toggle from './Toggle';
import TodoList from './TodoList';
import Footer from './Footer';

import "./App.css";

function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddNewTodo />
      </header>
      <div className="main">
        <Toggle />
        <TodoList />
      </div>
     <Footer />
    </div>
  );
}

export default App;
