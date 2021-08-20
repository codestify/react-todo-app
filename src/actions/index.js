export const FETCH_TODOS = "FETCH_TODOS";

export const fetchTodos = (todos) => {
  return {
    type: FETCH_TODOS,
    payload: { todos },
  };
};
