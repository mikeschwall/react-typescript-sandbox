import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";
import { addTodo, deleteTodo, fetchTodos, TodoAction } from "../actions";
import { useEffect } from "react";
import MyForm from "./MyForm";
import { WithAuth } from "./Hoc";

const Todolist = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();
    const Enhanced = WithAuth(MyForm);

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (t:any) => {
        const todo = {id: Math.random(), title:t, completed: true};
        dispatch(addTodo(todo));
    }

    return (
        <div>
            <h2>Todos</h2>
            <Enhanced getdata={handleData}/>
            {todos?.map(item => <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;