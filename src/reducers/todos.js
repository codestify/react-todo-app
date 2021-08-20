import {CREATE_TODO, FETCH_TODOS} from "../actions";

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
        default:
            return state;
    }
};

export default todosReducer
