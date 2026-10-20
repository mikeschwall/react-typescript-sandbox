import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, fetchTodo, TodoAction } from "../actions";
import MyForm from "./MyForm";
import WithAuth from "./Hoc";

const TodoList = () => {
    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();
    const EnhancedComponent = WithAuth(MyForm);

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch]);

    const handleData = (d:any) => {
        const t = {id:Math.random(), title:d, completed: true};
        dispatch(addTodo(t))
    }

    return (
        <div>
            <h2>{header.title}</h2>
            <EnhancedComponent getData={handleData}></EnhancedComponent>
            {todos?.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;