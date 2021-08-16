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
      filter: "all",
    };
  }
  handleAddTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: false,
    };
    const todos = [...this.state.todos, newTodo];

    this.setState({
      todos,
    });
  };

  handleOnDeleteTodo = (todo) => {
    const todos = this.state.todos.filter(
      (todoItem) => todoItem.id !== todo.id
    );
    this.setState({
      todos,
    });
  };

  handleUpdateTodo = (title, todo) => {
    const todos = this.state.todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return { ...todoItem, title };
      } else {
        return todoItem;
      }
    });

    this.setState({ todos });
  };

  handleToggleStatus = (checkedValue, todo) => {
    const todos = this.state.todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return { ...todoItem, completed: checkedValue };
      } else {
        return todoItem;
      }
    });

    this.setState({ todos });
  };

  handleToggleAll = (checkedValue) => {
    const todos = this.state.todos;
    todos.map((todo) => (todo.completed = checkedValue));
    this.setState({ todos });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  filteredTodos = () => {
    const { filter } = this.state;
    switch (filter) {
      case "active":
      case "clear":
        return this.state.todos.filter((todo) => todo.completed === false);
      case "completed":
        return this.state.todos.filter((todo) => todo.completed === true);
      case "all":
      default:
        return this.state.todos;
    }
  };

  getCount = () => {
    return this.state.todos.filter(todo => todo.completed === false).length
  }

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddNewTodo onAddTodo={this.handleAddTodo} />
        </header>
        <div className="main">
          <Toggle onToggleAll={this.handleToggleAll} />
          <TodoList
            todoItems={this.filteredTodos()}
            onDeleteTodo={this.handleOnDeleteTodo}
            onUpdateTodo={this.handleUpdateTodo}
            onStatusToggled={this.handleToggleStatus}
          />
        </div>
        <Footer onHandleFilter={this.handleFilter} count={this.getCount()}/>
      </div>
    );
  }
}

export default App;
