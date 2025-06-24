import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { addTodo, deleteTodo, fetchTodos, getMessage, todoAction } from '../actions';
import { ThunkDispatch } from 'redux-thunk';
import Todoform from './Todoform';
import MyButton, { ButtonProps } from './Mybutton';
import withAuth from './hoc';

const TodoList:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const message = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,todoAction> = useDispatch();
    
    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleData = useCallback((t:string) => {
        console.log(t);
       dispatch(addTodo({id:Math.random(),title:t,completed:true}))
    },[dispatch]);
       

    const handleDelete = (id:number) => {
        dispatch(deleteTodo(id));
    }

    const handleButton = () => {
        console.info("clciked");
        dispatch(getMessage({title:"messaage changed"}));
    }

    const EnhancedButton = withAuth<ButtonProps>(MyButton);

    return (
        <div>
            {message && <h2>{message.title}</h2>}
            <Todoform getData={handleData}></Todoform>
            
            <EnhancedButton changeLabel={() => handleButton()}>change header</EnhancedButton>
            {todos && todos.map(item => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;