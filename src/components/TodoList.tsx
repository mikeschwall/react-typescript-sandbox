import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, getMessage, TodoAction } from "../actions";
import { useEffect } from "react";
import MyForm from "./MyForm";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);

    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
        dispatch(getMessage({title:"Happy Monday"}))
    },[dispatch]);

    const handleData = (data:any) => {
        const todo = {id:Math.random(), title: data, completed: true};
        dispatch(addTodo(todo));
    }

    return (
        <div>
            <h2>{header.title}</h2>
            <MyForm getData={handleData}></MyForm>
            <hr/>
            {todos?.map(item => <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;