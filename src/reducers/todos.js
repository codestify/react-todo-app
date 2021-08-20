import { FETCH_TODOS } from "../actions";

const initialState = {
    todos : [
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
    ],
    filter: 'all'
}

const todosReducer = (state = initialState.todos , action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS: {
      return {
        todos: [...state, ...payload.todos],
      };
    }
    default:
      return state;
  }
};

export default todosReducer
