import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, TodoAction } from "../actions";
import { MyForm } from "./MyForm";

const Todolist = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    const handleDelete = (id:number) => {
        dispatch(deleteTodo(id))
    }

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (data:string) => {
        const t = {id:Math.random(),title:data,completed:true};
        dispatch(addTodo(t))
    }

    return (
        <div>
            <h2>{header && header.title}</h2>
            <MyForm getdata={handleData}></MyForm>
            {todos && todos.map(item => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;