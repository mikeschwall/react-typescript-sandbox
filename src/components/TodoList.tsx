import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, deleteTodo, fetchTodos, getMessage, TodoAction } from '../actions';
import TodoForm from './TodoForm';
import MyButton from './MyButtons';
import styles from './TodoList.module.css';

const TodoList:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();
    const [active,setActive] = useState(false);

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleDelete = (id:number) => {
        dispatch(deleteTodo(id));
        setActive(false);
    }

    const addTodoFromForm = useCallback((title:string) => {
        dispatch(addTodo({id:Math.random(),title,completed:false}));
    },[dispatch]);

    const handleButtonClick = () => {
        dispatch(getMessage({title:"State has been updated"}));
        setActive(true);
    }

    return (
        <div>
            <h2>Todos</h2>
            <div className={active ? styles.message : ''}>{header.title !== "hello" ? header.title : ''}</div>
            <TodoForm getData={addTodoFromForm}/>
            <MyButton changeLabel={() => handleButtonClick()}>change state</MyButton>
            {todos && todos.map(item => <li key={item.id}>{item.title} 
                <button onClick={() => handleDelete(item.id)}>delete</button></li>)}
        </div>
    )
}

export default TodoList;