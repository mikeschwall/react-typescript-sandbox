import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { addTodo, fetchTodos, TodoAction } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import MyForm from "./MyForm";

const Todolist = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch]);

    const handleData = (d:any) => {
        const todo = {id:Math.random(), title:d.mytodo, completed: true};
        dispatch(addTodo(todo));
    }

    return (
        <div>
            <h2>Todos</h2>
            <MyForm getData={handleData}></MyForm>
            {todos?.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;