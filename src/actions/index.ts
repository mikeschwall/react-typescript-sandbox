import axios from "axios";
import { actionTypes } from "./types";
import { Dispatch } from "redux";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
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

//action creators

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch<FetchTodoAction>({
            type: actionTypes.FETCH_TODOS,
            payload: data
        })
    }
}

export const addTodo = (todo:Todo):AddTodoAction => {
    return {
        type: actionTypes.ADD_TODO,
        payload: todo
    }
}

export const getMessage = (m:Message):GetMessageAction => {
    return {
        type: actionTypes.GET_MESSAGE,
        payload: m
    }
}

export const deleteTodo = (id:number):DeleteTodoAction => {
    return {
        type: actionTypes.DELETE_TODO,
        payload: id
    }
}