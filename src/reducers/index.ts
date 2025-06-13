import { GetMessageAction, Todo, TodoAction } from "../actions";
import { actionTypes } from "../actions/types";
import { combineReducers } from "redux";
import { Message } from "../actions";


export const todoReducer = (state:Todo[] = [], action:TodoAction) => {
    switch(action.type) {
        case actionTypes.FETCH_TODOS:
            return action.payload;
        case actionTypes.DELETE_TODO:
            return state.filter((item:Todo) => item.id !== action.payload);
        case actionTypes.ADD_TODO:
            console.log(action.payload);
            return [action.payload, ...state];
        default:
            return state;
    }
}

export const getMessageReducer = (state:Message = {title:"hello"}, action:GetMessageAction) => {
    switch(action.type) {
        case actionTypes.GET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}

export interface AppState {
    todos: Todo[];
    header: Message
}

export default combineReducers<AppState>({
    todos: todoReducer,
    header: getMessageReducer
})