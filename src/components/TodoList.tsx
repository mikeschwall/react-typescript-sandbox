import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, deleteTodo, fetchTodos, Todo, TodoAction } from '../actions';
import MyForm from './MyForm';

const TodoList:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleDelete = (n:number) => {
        dispatch(deleteTodo(n));
    }

    const handleFormData = useCallback((data:string) => {
        console.log(data);
         dispatch(addTodo({id:Math.random(),title:data,completed:true}))
    },[dispatch]);

    return <>
        <h2>Todos</h2>
        <MyForm getdata={handleFormData}/>
        {todos && todos.slice(0,10).map(item => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}
    </>
}

export default TodoList;