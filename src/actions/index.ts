import { Dispatch } from "redux";
import { actionTypes } from "./types";
import axios from 'axios';

export interface Todo {
    id:number;
    title:string;
    completed: boolean;
}

export interface Message {
    title:string;
}

export interface FetchTodoAction {
    type: actionTypes.FETCH_TODOS;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: actionTypes.DELETE_TODO;
    payload: number;
}

export interface GetMessageAction {
    type: actionTypes.GET_MESSAGE;
    payload: Message;
}

export interface AddTodoAction {
    type: actionTypes.ADD_TODO;
    payload: Todo;
}

export type TodoAction = FetchTodoAction | DeleteTodoAction | GetMessageAction | AddTodoAction;

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch<FetchTodoAction>({
            type: actionTypes.FETCH_TODOS,
            payload: data
        })
    }
}

export const getMessage = (m:Message):GetMessageAction => {
    return {
        type: actionTypes.GET_MESSAGE,
        payload: m
    }
}

export const addTodo = (t:Todo):AddTodoAction => {
    return {
        type: actionTypes.ADD_TODO,
        payload: t
    }
}

export const deleteTodo = (n:number):DeleteTodoAction => {
    return {
        type: actionTypes.DELETE_TODO,
        payload: n
    }
}