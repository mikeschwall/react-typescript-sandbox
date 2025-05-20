import React, { FormEvent, useRef } from 'react';

interface FormProps {
    getData:(text:string) => void;
}

const TodoForm:React.FC<FormProps> = ({getData}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        if (inputRef.current) {
            getData(inputRef.current.value);
        }

    }

    return (
        <form style={{marginBottom:"20px"}} onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input ref={inputRef} type="text" id="todo" />
            <button type="submit">add todo</button>
        </form>
    )
}

export default TodoForm;