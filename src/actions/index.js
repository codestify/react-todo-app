export const FETCH_TODOS = "FETCH_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const TOGGLE_STATUS = "TOGGLE_STATUS"
export const TOGGLE_ALL = "TOGGLE_ALL"

export const ACTIVE_TODOS = "ACTIVE_TODOS"
export const COMPLETED_TODOS = "COMPLETED_TODOS"
export const SHOW_ALL = "SHOW_ALL"
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS"

export const fetchTodos = (todos) => {
    return {
        type: FETCH_TODOS,
        payload: {todos},
    };
};

export const createNewTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo }
})

export const deleteTodo = todo => ({
    type: DELETE_TODO,
    payload: { todo }
})

export const updateTodo = (title,todo) => ({
    type: UPDATE_TODO,
    payload: { title, todo }
})

export const toggleStatus = (checkedValue, todo) => ({
    type: TOGGLE_STATUS,
    payload: { checkedValue, todo }
})

export const toggleAll = checkedValue => ({
    type: TOGGLE_ALL,
    payload: { checkedValue }
})

// visibility filter action creators
export const showActiveTodos = () => ({
    type: ACTIVE_TODOS
})

export const showCompletedTodos = () => ({
    type: COMPLETED_TODOS
})

export const showAllTodos = () => ({
    type: SHOW_ALL
})

export const clearCompletedTodos = () => ({
    type: CLEAR_COMPLETED_TODOS
})