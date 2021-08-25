import React, {useState} from "react";
import {connect} from "react-redux";
import {createNewApiTodo} from "../thunks";

const AddNewTodo = ({onAddTodo}) => {
    const [title, setTitle] = useState('')

    const handleEnter = (e) => {
        if (e.key !== "Enter") return;
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            title,
            completed: false,
        };
        onAddTodo(newTodo)
        setTitle('')

    };

    return (
        <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleEnter}
            autoFocus
        />
    );
};

const mapDispatchToProps = dispatch => ({
    onAddTodo: todo => dispatch(createNewApiTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddNewTodo);
