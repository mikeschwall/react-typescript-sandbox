import { Dispatch } from "redux";
import { actionTypes } from "./types";
import api from "../apis/axios";

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

export interface DeleteTodoAction {
    type: actionTypes.DELETE_TODO;
    payload: number;
}

export interface AddTodoAction {
    type: actionTypes.ADD_TODO;
    payload: Todo;
}

export type TodoAction = FetchTodoAction | GetMessageAction | DeleteTodoAction | AddTodoAction;

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
       const {data} = await api.get("/todos");
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

export const deleteTodo = (id:number):DeleteTodoAction => {
   // console.log("inside delete todo action creator");
   // console.log("id",id);
    return {
        type: actionTypes.DELETE_TODO,
        payload:id
    }
}

export const addTodo = (t:Todo):AddTodoAction => {
    return {
        type: actionTypes.ADD_TODO,
        payload:t
    }
}

