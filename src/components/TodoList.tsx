import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchTodos, getMessage, Message, Todo } from '../actions';
import { AppState } from '../reducers';
import { fetchTodosSelector, getMessageSelector } from '../selectors';
import MyButton from './MyButton';
import AddTodo from './AddTodo';

interface StateProps {
    todos:Todo[];
    header: Message;
}

interface DispatchProps {
    fetchTodos: () => void;
    getMessage: typeof getMessage;
}

type MergedProps = StateProps & DispatchProps;

const TodoList:React.FC<MergedProps> = ({todos,fetchTodos,getMessage,header}) => {

    useEffect(() => {
        fetchTodos();
    },[fetchTodos]);

    const handleButtonClick = (title:string) => {
        getMessage({title})
    }

    return <>
    {header.title !== '' ? <h2>{header.title}</h2> : null}
    <AddTodo/><br/>
    <MyButton changeLabel={() => handleButtonClick("changed")}>change stuff</MyButton>
        {todos && todos.map(item => <li key={item.id}>{item.title}</li>)}
    </>
}

const mapStateToProps = (state:AppState) => {
    return {
        todos: fetchTodosSelector(state),
        header: getMessageSelector(state)
    }
}

const mapDispatchToProps = {
    fetchTodos,
    getMessage
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);