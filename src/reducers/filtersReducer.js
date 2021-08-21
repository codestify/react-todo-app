import {ACTIVE_TODOS, COMPLETED_TODOS, SHOW_ALL} from "../actions";




export const todosReducer = (state = 'all', action) => {
    switch (action.type) {
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