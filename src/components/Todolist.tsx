import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, deleteTodo, fetchTodos, Todo, TodoAction } from '../actions';
import TodoForm from './Form';

const Todolist:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const myheader = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleDelete = (n:number) => {
        dispatch(deleteTodo(n));
    }

    const handleData = (m:string) => {
        dispatch(addTodo({id:Math.random(),title:m,completed:true}));
    }

    return (
        <div>
            <h2>Todos</h2>
            {myheader && myheader.title}
            <TodoForm getData={handleData}/>
            {todos && todos.map((item:Todo) => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;