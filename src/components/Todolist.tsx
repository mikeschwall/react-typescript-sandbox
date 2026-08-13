import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { addTodo, deleteTodo, fetchTodos, Todo, TodoAction } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import { useEffect } from "react";
import MyForm from "./Myform";
import WithAuth from "./Hoc";

const Todolist = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState, void, TodoAction> = useDispatch();
    console.log(todos);
    const EnhancedComponent = WithAuth(MyForm);

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (data:any) => {
        
        const todo = {id: Math.random(), title: data, completed: false};
        dispatch(addTodo(todo))
    }

    return (
        <div>
            <h2>{header.title}</h2>
            <EnhancedComponent getData={handleData}></EnhancedComponent>
            {todos?.map((item:Todo) => <li key={item.id}>{item.title} <button onClick={() => dispatch(deleteTodo(item.id))}>X</button></li>)}
        </div>
    )
}

export default Todolist;