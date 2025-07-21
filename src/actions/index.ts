import { Dispatch } from "redux";
import { actionTypes } from "./types";
import Api from "../api/axios";

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

export interface GetMessageAction {
    type: actionTypes.GET_MESSAGE;
    payload: Message;
}

export interface AddTodoAction {
    type: actionTypes.ADD_TODO;
    payload: Todo;
}

export interface DeleteTodoAction {
    type: actionTypes.DELETE_TODO;
    payload:number;
}

export type TodoAction = FetchTodoAction | GetMessageAction | AddTodoAction | DeleteTodoAction;

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
        const {data} = await Api.get("/todos");
        dispatch<FetchTodoAction>({
            type: actionTypes.FETCH_TODOS,
            payload:data
        })
    }
}

export const deleteTodo = (id:number): DeleteTodoAction => {
    return {
        type: actionTypes.DELETE_TODO,
        payload: id
    }
}

export const getMessage = (m:Message): GetMessageAction => {
    return {
        type: actionTypes.GET_MESSAGE,
        payload: m
    }
}

export const addTodo = (t: Todo): AddTodoAction => {
    return {
        type: actionTypes.ADD_TODO,
        payload:t
    }
}