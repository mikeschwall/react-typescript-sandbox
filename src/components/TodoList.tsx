import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, fetchTodos, Todo, TodoAction } from '../actions';
import TodoForm from './TodoForm';

const TodoList:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const myheader = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = (test:Todo) => {
        dispatch(addTodo(test))
    }

    return (
        <div>
            <h2>{myheader && myheader.title}</h2>
            <TodoForm getData={handleData}/>
            {todos && todos.slice(0,10).map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;