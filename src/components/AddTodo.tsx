import React, { FormEvent, useRef } from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../actions';

interface DispatchProps {
    addTodo: typeof addTodo;
}

const AddTodo:React.FC<DispatchProps> = ({addTodo}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputRef.current) {
            addTodo({ title: inputRef.current.value });
          }
    }

    return <>
    <h2>Add Todo</h2>
    <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" /> <button>submit</button>
    </form>
    </>
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null,mapDispatchToProps)(AddTodo);