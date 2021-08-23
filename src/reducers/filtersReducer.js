import {ACTIVE_TODOS, CLEAR_COMPLETED_TODOS, COMPLETED_TODOS, SHOW_ALL} from "../actions";




export const todosReducer = (state = 'all', action) => {
    switch (action.type) {
        case CLEAR_COMPLETED_TODOS:
        case ACTIVE_TODOS: {
            return 'active';
        }
        case COMPLETED_TODOS: {
            return 'completed';
        }
        case SHOW_ALL:
        default:
            return 'all'
    }
}

export default todosReducer