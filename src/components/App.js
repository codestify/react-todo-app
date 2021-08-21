import React from "react";
import {connect} from 'react-redux';
import AddNewTodo from "./AddNewTodo";
import Toggle from "./Toggle";
import TodoList from "./TodoList";
import Footer from "./Footer";
import {fetchTodos} from "../actions";
import "./App.css";

class App extends React.Component {

  handleAddTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: false,
    };
    const todos = [...this.props.todos, newTodo];

    this.setState({
      todos,
    });
  };

  handleOnDeleteTodo = (todo) => {
    const todos = this.props.todos.filter(
      (todoItem) => todoItem.id !== todo.id
    );
    this.setState({
      todos,
    });
  };

  handleUpdateTodo = (title, todo) => {
    const todos = this.props.todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return { ...todoItem, title };
      } else {
        return todoItem;
      }
    });

    this.setState({ todos });
  };

  handleToggleStatus = (checkedValue, todo) => {
    const todos = this.props.todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return { ...todoItem, completed: checkedValue };
      } else {
        return todoItem;
      }
    });

    this.setState({ todos });
  };

  handleToggleAll = (checkedValue) => {
    const todos = this.props.todos;
    todos.map((todo) => (todo.completed = checkedValue));
    this.setState({ todos });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  filteredTodos = () => {
    const { filter, todos } = this.props;
    switch (filter) {
      case "active":
      case "clear":
        return todos.filter((todo) => todo.completed === false);
      case "completed":
        return todos.filter((todo) => todo.completed === true);
      case "all":
      default:
        return todos;
    }
  };

  getCount = () => {
    return this.props.todos.filter(todo => todo.completed === false).length
  }

  componentDidMount() {
    this.props.loadTodos()
  }

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddNewTodo />
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos : state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => ({
   loadTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
