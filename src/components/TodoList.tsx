import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, deleteTodo, fetchTodos, getMessage, TodoAction } from '../actions';
import TodoForm from './MyForm';
import '../mainstyle.css'
import withAuth from './hoc';

const TodoList:React.FC = () => {
    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
        dispatch(getMessage({title:"The message worked correctly"}))
    },[dispatch])

    const handleDelete = (id:number) => {
       // console.log(id);
        dispatch(deleteTodo(id));
    }

    const handleSubmit = (data:string) => {
        const t = {id:Math.random(),title:data,completed:false};
        dispatch(addTodo(t));
    }

    const EnhancedComponent = withAuth(TodoForm);


    return (
        <div>
            <h2>{header && header.title}</h2>
            <EnhancedComponent getData={handleSubmit}></EnhancedComponent>
            {todos && todos.slice(0,10).map(item => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;