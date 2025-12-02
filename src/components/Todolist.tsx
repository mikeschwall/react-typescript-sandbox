import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { addTodo, deleteTodo, fetchTodos, TodoAction } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import MyForm from "./MyForm";

const TodoList = () => {
    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch]);

    const handleData = (data:any) => {
        const t = {id:Math.random(), title:data, completed:false};
        dispatch(addTodo(t))
    }

    return (
        <div>
            <h2>Todos</h2>
            <strong>{header?.title}</strong>
            <MyForm getdata={handleData}></MyForm>
            {todos?.map(item => <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;