import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { addTodo, deleteTodo, fetchTodos, getMessage, TodoAction } from '../actions';
import MyForm from './MyForm';
import MyButton from './MyButton';
import { EnhancedLazy } from './Lazy';

const TodoList:React.FC = () => {

    const todos = useSelector((state:AppState) => state.todos);
    const header = useSelector((state:AppState) => state.header);
    const dispatch:ThunkDispatch<AppState,void,TodoAction> = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch]);

    const handleDelete = (id:number) => {
        dispatch(deleteTodo(id))
    }

    const handleData = useCallback((text:any) => {
        dispatch(addTodo({id:Math.random(),title:text,completed:true}))
    },[dispatch]);

    const handleButtonClick = () => {
        
        dispatch(getMessage({title:"mike made update"}))
        console.log(header.title);
    }

    return (
        <div>
            <h2>Todos</h2>
            {header.title !== "Hello" && <h4>{header.title}</h4>}
            <MyButton changeLabel={() => handleButtonClick()}>change header</MyButton>
            <MyForm getData={handleData}></MyForm>
            {todos && todos.map(item => <li onClick={() => handleDelete(item.id)} key={item.id}>{item.title}</li>)}<br/>
            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy>
            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>
                        <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>

            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>

            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>

            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>

            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>

            <EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><EnhancedLazy changeLabel={() => handleButtonClick()}>test</EnhancedLazy><br/>

        </div>
    )
}

export default TodoList;