import { AppState } from "../reducers";

export const fetchTodoSelector = (state:AppState) => state.initialTodos;