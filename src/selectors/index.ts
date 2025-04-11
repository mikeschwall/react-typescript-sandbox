import { AppState } from "../reducers";

export const fetchTodosSelector = (state:AppState) => state.todos;
export const getMessageSelector = (state:AppState) => state.header;