import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, fetchTodos, TodoAction } from "../actions";
import MyForm from "./MyForm";

const TodoList = () => {
    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    const handleData = (d:any) => {
        const todo = {id:Math.random(), title: d, completed: true};
        dispatch(addTodo(todo));

    }

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);
    return (
        <div>
            <h2>{header.title}</h2>
            <MyForm getData={handleData}></MyForm>
            {todos?.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;