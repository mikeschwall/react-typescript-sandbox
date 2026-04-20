import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, Todo, TodoAction } from "../actions";
import { useEffect } from "react";
import MyForm from "./MyForm";


const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (d:any) => {
        const todo = {id:Math.random(), title: d, completed: true}
        dispatch(addTodo(todo));
    }

    return (
        <div>
            <h2>Todos</h2>
            <MyForm getdata={handleData}/>
            {todos?.map((item:Todo) => <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;