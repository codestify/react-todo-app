import ApiService from "./Libs/ApiService";
import {createNewTodo, deleteTodo, fetchTodos, updateTodo} from "./actions";

export const fetchListOfTodos = () => async dispatch => {
    try{
        const todos = await ApiService.fetchListOfTodos()
        dispatch(fetchTodos(todos))
    }catch (e) {}
}

export const createNewApiTodo = todo =>  async dispatch => {
    try{
        const todoItem = await ApiService.createNewTodo(todo)
        dispatch(createNewTodo(todoItem))
    }catch (e) {}
}

export const deleteApiTodo = todo => async dispatch => {
    try{
        await ApiService.deleteTodo(todo)
        dispatch(deleteTodo(todo))
    }catch (e) {}
}

export const editApiTodo = (title, todo) => async dispatch => {
    try{
        const todoItem = await ApiService.editTodo(title, todo)
        dispatch(updateTodo(title, todoItem))
    }catch (e) {}
}