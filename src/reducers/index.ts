import { combineReducers } from "redux";
import { GetMessageAction, Message, Todo, TodoAction } from "../actions";
import { actionTypes } from "../actions/types";

export interface AppState {
    todos: Todo[];
    header:Message;
}

export const fetchTodoReducer = (state:Todo[] = [], action:TodoAction) => {
    switch(action.type) {
        case actionTypes.FETCH_TODOS:
            return action.payload;
        case actionTypes.DELETE_TODO:
            return state.filter(item => item.id !== action.payload);
        case actionTypes.ADD_TODO:
            return [action.payload,...state];
        default:
            return state;
    }
}

export const getMessageReducer = (state:Message={title:"hello world"},action:GetMessageAction) => {
    switch(action.type) {
        case actionTypes.GET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers<AppState>({
    todos: fetchTodoReducer,
    header: getMessageReducer
})

