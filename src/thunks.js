import ApiService from "./Libs/ApiService";
import {fetchTodos} from "./actions";

export const fetchListOfTodos = () => async dispatch => {
    try{
        const todos = await ApiService.fetchListOfTodos('/api')
        dispatch(fetchTodos(todos))
    }catch (e) {}
}