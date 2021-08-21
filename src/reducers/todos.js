
import {CREATE_TODO, DELETE_TODO, FETCH_TODOS, TOGGLE_ALL, TOGGLE_STATUS, UPDATE_TODO} from "../actions";

const initialState = {
    todos: [],
    filter: 'all'
}

const todosReducer = (state = initialState.todos, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_TODOS: {
            return [...state, ...payload.todos]
        }
        case CREATE_TODO: {
            return [...state, payload.todo]
        }
        case DELETE_TODO: {
            const todos = state.filter(
                (todoItem) => todoItem.id !== payload.todo.id
            );
            return [...todos]
        }
        case UPDATE_TODO: {
            const { title, todo } = payload
            const todos = state.map((todoItem) => {
                if (todoItem.id === todo.id) {
                    return { ...todoItem, title };
                } else {
                    return todoItem;
                }
            });
            return [...todos]
        }
        case TOGGLE_STATUS: {
            const todos = state.map((todoItem) => {
                if (todoItem.id === payload.todo.id) {
                    return { ...todoItem, completed: payload.checkedValue };
                } else {
                    return todoItem;
                }
            });
            return [...todos]
        }
        case TOGGLE_ALL: {
            const todos = state.map( todoItem => {
                return { ...todoItem, completed: payload.checkedValue };
            });
            return [...todos]
        }
        default:
            return state;
    }
};

export default todosReducer
