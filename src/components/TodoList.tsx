import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, TodoAction } from "../actions";
import { useEffect } from "react";
import MyForm from "./MyForm";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (t:any) => {
        const todo = {id:Math.random(), title: t, completed: true};
        dispatch(addTodo(todo))
    }

    return (
        <div>
            <h2>{header?.title}</h2>
            <MyForm getData={handleData}></MyForm>
            {todos?.map(item => <li key={item.id}>{item.title} <button onClick={() => dispatch(deleteTodo(item.id))}>X</button></li>)}
        </div>
    )
}

export default TodoList;