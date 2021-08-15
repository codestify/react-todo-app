import React from "react";
import AddNewTodo from "./AddNewTodo";
import Toggle from "./Toggle";
import TodoList from "./TodoList";
import Footer from "./Footer";

import "./App.css";

const todoItems = [
  {
    id: 887258856,
    title: "React training",
    completed: false,
  },
  {
    id: 887258866,
    title: "Go for a run",
    completed: true,
  },
  {
    id: 887258876,
    title: "Listen to some music",
    completed: true,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoItems,
    };
  }
  handleAddTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: false
    }
    const todos = [...this.state.todos, newTodo]

    this.setState({
      todos
    })
  };

  handleOnDeleteTodo = todo => {
    const todos = this.state.todos.filter(todoItem => todoItem.id !== todo.id)
    this.setState({
      todos
    })
  }

  handleUpdateTodo = (title, todo) => {
    const todos = this.state.todos.map(todoItem => {
      if(todoItem.id === todo.id){
        return {...todoItem, title}
      }else{
        return todoItem
      }
    })

    this.setState({ todos })
  }

  handleToggleStatus = (checkedValue, todo) => {
    const todos = this.state.todos.map(todoItem => {
      if(todoItem.id === todo.id){
        return {...todoItem, completed: checkedValue}
      }else{
        return todoItem
      }
    })

    this.setState({todos})
  }

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddNewTodo onAddTodo={this.handleAddTodo} />
        </header>
        <div className="main">
          <Toggle />
          <TodoList
             todoItems={this.state.todos}
             onDeleteTodo={this.handleOnDeleteTodo}
             onUpdateTodo={this.handleUpdateTodo}
             onStatusToggled={this.handleToggleStatus}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
