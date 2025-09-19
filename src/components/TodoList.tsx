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

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (data:any) => {
        const t = {id:Math.random(), title: data, completed: true};
        dispatch(addTodo(t))
    }

    return (
        <div>
            <h2>{header.title}</h2>
            <MyForm getdata={handleData}/>
            {todos && todos.slice(0,10).map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;