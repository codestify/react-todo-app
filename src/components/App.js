import "./App.css";

function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
      <div className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" />
          </li>
        </ul>
      </div>
      <div className="footer">
        <span className="todo-count">
          <strong>0</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </div>
    </div>
  );
}

export default App;