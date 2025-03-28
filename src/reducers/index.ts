import { combineReducers } from "redux";
import {  Todo, todoAction } from "../actions";
import { actionTypes } from "../actions/types";

export interface AppState {
    initialTodos: Todo[];
}

export const fetchTodoReducer = (state:Todo[] = [], action: todoAction) => {
    switch(action.type) {
        case actionTypes.FETCH_TODOS:
            return action.payload;
        case actionTypes.ADD_TODO:
            return [action.payload, ...state]
        default:
            return state;
    }
}


export default combineReducers<AppState>({
    initialTodos: fetchTodoReducer
})