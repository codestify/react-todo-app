import React from "react";

const Footer = ({onHandleFilter, count}) => {

  const handleFilter = (filter) => {
    onHandleFilter(filter)
  }
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{count}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/" onClick={() => handleFilter('all')}>
            All
          </a>
        </li>
        <li>
          <a href="#/active" onClick={() => handleFilter('active')}>Active</a>
        </li>
        <li>
          <a href="#/completed" onClick={() => handleFilter('completed')}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => handleFilter('clear')}>Clear completed</button>
    </div>
  );
};

export default Footer;
