import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { addTodo, fetchTodos, todoAction } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import TodoForm from "./MyForm";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const dispatch:ThunkDispatch<AppState,void,todoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (data:any) => {
        const todo = {id: Math.random(), title: data, completed: false};
        dispatch(addTodo(todo));
    }

    return (
        <div>
            <h2>Todos</h2>
            <TodoForm getdata={handleData}></TodoForm>
            {todos && todos.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;