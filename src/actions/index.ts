import {Dispatch} from 'redux'
import { actionTypes } from "./types";
import axios from 'axios';

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

export interface Message {
    title: string;
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

export type todoAction = FetchTodoAction | DeleteTodoAction | AddTodoAction;

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
        dispatch<FetchTodoAction>({
            type: actionTypes.FETCH_TODOS,
            payload: data
        })
    }
}

export const deleteTodo = (id:number) => {
    alert("todo removed");
    return {
        type: actionTypes.DELETE_TODO,
        payload: id
    }
}

export const getMessage = (m:Message) => {
    return {
        type: actionTypes.GET_MESSAGE,
        payload:m
    }
}

export const addTodo = (t:Todo) => {
    return  {
        type: actionTypes.ADD_TODO,
        payload: t
    }
}