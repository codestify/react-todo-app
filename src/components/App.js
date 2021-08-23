import React from "react";
import {connect} from 'react-redux';
import AddNewTodo from "./AddNewTodo";
import Toggle from "./Toggle";
import TodoList from "./TodoList";
import Footer from "./Footer";
import {fetchListOfTodos} from "../thunks";
import "./App.css";

class App extends React.Component {

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
          <Toggle />
          <TodoList todoItems={this.filteredTodos()} />
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
   loadTodos: () => dispatch(fetchListOfTodos())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
