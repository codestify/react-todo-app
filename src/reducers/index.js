import { combineReducers } from 'redux'
import todosReducer from './todos'
import filtersReducer from "./filtersReducer";

export default combineReducers({
    todos: todosReducer,
    filter: filtersReducer
})