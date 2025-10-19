import { Dispatch } from "redux";
import { actionTypes } from "./types";
import axios from "axios";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

export interface Message {
    title:string;
}

export interface FetchTodoction {
    type: actionTypes.FETCH_TODOS;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: actionTypes.DELETE_TODO;
    payload:number;
}

export interface AddTodoAction {
    type: actionTypes.ADD_TODO;
    payload: Todo;
}

export interface GetMessageAction {
    type: actionTypes.GET_MESSAGE;
    payload:Message;
}

export type TodoAction = FetchTodoction | DeleteTodoAction | AddTodoAction | GetMessageAction;

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
        dispatch<FetchTodoction>({
            type: actionTypes.FETCH_TODOS,
            payload: data
        })
    }
}

export const deleteTodo = (id:number):DeleteTodoAction => {
    return {
        type:actionTypes.DELETE_TODO,
        payload:id
    }
}

export const addTodo = (t:Todo):AddTodoAction => {
    return {
        type: actionTypes.ADD_TODO,
        payload:t
    }
}

export const getMessage = (m:Message):GetMessageAction => {
    return {
        type: actionTypes.GET_MESSAGE,
        payload:m
    }
}