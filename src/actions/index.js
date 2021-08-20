export const FETCH_TODOS = "FETCH_TODOS";
export const CREATE_TODO = "CREATE_TODO"

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