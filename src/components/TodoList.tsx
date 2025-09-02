import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, fetchTodos, TodoAction } from "../actions";
import { useEffect } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleSubmit = (data:any) => {
        dispatch(addTodo({id:Math.random(), title: data.mytodo, completed: false}));
    }

    return (
        <div>
            <h2>{header && header.title}</h2>
            <TodoForm getdata={handleSubmit}/>
            {todos && todos.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;