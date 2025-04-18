import {connect} from 'react-redux';
import { addTodo, deleteTodo, fetchTodos, getMessage, Message, Todo } from '../actions';
import { AppState } from '../reducers';
import { FormEvent, useEffect, useRef } from 'react';
import MyButton from './MyButton';

interface StateProps {
    todos: Todo[];
    header: Message;
}

interface DispatchProps {
    fetchTodos: () => void;
    deleteTodo: typeof deleteTodo;
    getMessage: typeof getMessage,
    addTodo: typeof addTodo;
}

type MergedProps = StateProps & DispatchProps;

const TodoList:React.FC<MergedProps> = ({todos,fetchTodos,deleteTodo,getMessage,header,addTodo}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchTodos();
    },[fetchTodos]);

    const handleClick = (title:string) => {
        getMessage({title})
    } 

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        if (inputRef.current) {
            addTodo({id:Math.random(),completed:true,title: inputRef.current.value})
        }

    }

    return (
        <div>
            <h2>Todos</h2>
            {header.title !== '' ? <h4>{header.title}</h4> : null}
            <MyButton changeLabel={() => handleClick("mike in the house")}>change</MyButton>
            <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" /> <button>add todo</button>
            </form>
            {todos && todos.map(item => <li onClick={() => deleteTodo(item.id)} key={item.id}>{item.title}</li>)}
        </div>
    )
}

const mapStateToProps = (state:AppState) => {
    return {
        todos: state.todos,
        header: state.header
    }
}

const mapDispatchToProps = {
    fetchTodos,
    deleteTodo,
    getMessage,
    addTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);