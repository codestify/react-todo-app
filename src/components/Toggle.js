import React,{useState} from "react";
import {connect } from 'react-redux'
import {toggleAll} from "../actions";

function Toggle({onToggleAll}) {
  const [toggle, setToggle] = useState(false)

  const handleToggleAll = e => {
    const checkedValue = e.target.checked
    setToggle(checkedValue)
    onToggleAll(checkedValue)
  }

  return (
    <>
      <input
         id="toggle-all"
         className="toggle-all"
         type="checkbox"
         checked={toggle}
         onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
    onToggleAll: (checkedValue) => dispatch(toggleAll(checkedValue))
})

export default connect(null, mapDispatchToProps) (Toggle);
