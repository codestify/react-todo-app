export const FETCH_TODOS = "FETCH_TODOS";
export const CREATE_TODO = "CREATE_TODO"

export const ACTIVE_TODOS = "ACTIVE_TODOS"
export const COMPLETED_TODOS = "COMPLETED_TODOS"
export const SHOW_ALL = "SHOW_ALL"

export const fetchTodos = () => {
    const apiTodos = [
        {
            id: 887258856,
            title: "React training",
            completed: false,
        },
        {
            id: 887258866,
            title: "Go for a run",
            completed: true,
        },
        {
            id: 887258876,
            title: "Listen to some music",
            completed: true,
        },
    ];
    return {
        type: FETCH_TODOS,
        payload: {todos: apiTodos},
    };
};

export const createNewTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo }
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