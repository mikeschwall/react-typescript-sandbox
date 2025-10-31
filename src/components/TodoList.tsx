import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useCallback, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, TodoAction } from "../actions";
import MyForm from "./MyForm";

const TodoList = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch])

    const handleDelete = (id:number) => {
        dispatch(deleteTodo(id));
    }

    const handleData = useCallback((todo:any) => {
        const t = {id:Math.random(),title:todo, completed: true};
        dispatch(addTodo(t))
    },[dispatch]);

    return (
        <div>
            <h2>{header?.title}</h2>
            <MyForm getdata={handleData}/>
            {todos?.slice(0,10).map(item => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;