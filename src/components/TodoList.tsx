import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, deleteTodo, fetchTodos, getMessage, Message, Todo, TodoAction } from '../actions';
import { FormProps, TodoForm } from './TodoForm';
import WithAuth from './hoc';

const TodoList:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const message = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();
    const EnhancedComponent = WithAuth<FormProps>(TodoForm);

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch])

    const changeHeader = () => {
        dispatch(getMessage({title:"changed header"}))
    }

    const handleForm = (data:any) => {
        console.log(data);
        const todo = {id: Math.random(), title: data, completed: false}
        dispatch(addTodo(todo));
    }
    
    return (
        <div>
            <h2>{message.title}</h2>
            <button onClick={() => changeHeader()}>changeHeader</button>
            
            <EnhancedComponent getTodo={handleForm}></EnhancedComponent>
            {todos && todos.slice(0,10).map((item:Todo) => <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;