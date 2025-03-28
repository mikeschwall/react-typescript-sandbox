import { Dispatch } from "redux";
import { actionTypes } from "./types";
import axios from "axios";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

export interface FetchTodoAction {
    type: actionTypes.FETCH_TODOS;
    payload: Todo[];
}

export interface AddTodoAction {
    type: actionTypes.ADD_TODO,
    payload: Todo;
}

export type todoAction = FetchTodoAction | AddTodoAction;

export const fetchTodos = () => {
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
        dispatch<FetchTodoAction>({
            type: actionTypes.FETCH_TODOS,
            payload:data
        })
    }
}

export const addTodo = (t:Todo) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: t
    }
}

