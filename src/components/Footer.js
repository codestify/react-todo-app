import React from "react";
import {connect} from 'react-redux'
import {showActiveTodos, showCompletedTodos, showAllTodos} from "../actions";

const Footer = (props) => {

    const getCount = () => {
        return props.todos.filter(todo => todo.completed === false).length
    }

    return (
        <div className="footer">
      <span className="todo-count">
        <strong>{getCount()}</strong> item left
      </span>
            <ul className="filters">
                <li>
                    <a className={props.filter === 'all' ? 'selected' : ''} href="#/all" onClick={() => props.showAllTodos()}>
                        All
                    </a>
                </li>
                <li>
                    <a href="#/active" className={props.filter === 'active' ? 'selected' : ''} onClick={() => props.showActiveTodos()}>Active</a>
                </li>
                <li>
                    <a href="#/completed" className={props.filter === 'completed' ? 'selected' : ''} onClick={() => props.showCompletedTodos()}>Completed</a>
                </li>
            </ul>
            {/*<button className="clear-completed" onClick={() => handleFilter('clear')}>Clear completed</button>*/}
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    showActiveTodos : () => dispatch(showActiveTodos()),
    showCompletedTodos: () => dispatch(showCompletedTodos()),
    showAllTodos: () => dispatch(showAllTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
