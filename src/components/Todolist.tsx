import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { addTodo, deleteTodo, fetchTodos, Todoaction } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import MyForm from "./MyForm";

const Todolist = () => {
    const todos = useSelector((state:AppState) => state.todos);
    console.log("todos",todos)
    const dispatch:ThunkDispatch<AppState,void,Todoaction> = useDispatch();


    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch])

    const handleData = (data:any) => {
        const t = {id:Math.random(), title: data, completed:true};
        dispatch(addTodo(t));
    }

    return (
        <div>
            <h2>Todos</h2>
            <MyForm getdata={handleData}></MyForm>
            {todos?.map(item => <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;