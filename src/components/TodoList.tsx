import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, Todoaction } from "../actions";
import { useEffect } from "react";
import MyForm from "./MyForm";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,Todoaction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleRemove = (id:number) => {
        dispatch(deleteTodo(id));
    }

    const handleData = (data:any) => {
        const todo = {id:Math.random(),title:data,completed:false};
        dispatch(addTodo(todo))
    }


    return (
        <div>
            <h2>{header.title}</h2>
            <MyForm getdata={handleData}></MyForm>
            {todos && todos.map(item => <li onClick={() => handleRemove(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;