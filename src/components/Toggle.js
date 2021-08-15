import React from "react";

function Toggle() {
  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

export default Toggle;
