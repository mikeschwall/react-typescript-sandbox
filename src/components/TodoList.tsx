import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, fetchTodos, TodoAction } from "../actions";
import { useEffect } from "react";
import { MyForm } from "./Myform";
import WithAuth from "./Hoc";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    const Enhanced = WithAuth(MyForm);

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (t:any) => {
        console.warn(t);
        dispatch(addTodo(t));

    }

    return (
        <div>
            <h2>{header.title}</h2>
            <Enhanced getData={handleData}></Enhanced>
            {todos?.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;