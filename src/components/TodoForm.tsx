import React, { FormEvent, useRef } from 'react';

interface FormProps {
    getData: (input:string) => void;
}

const TodoForm:React.FC<FormProps> = ({getData}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleForm = (event:FormEvent) => {
        event.preventDefault();
        if (inputRef.current) {
            
            getData(inputRef.current.value);
        }
    }


    return (
        <form onSubmit={handleForm}>
            <input ref={inputRef} type="text" /> <button>add todo</button>
        </form>
    )
}

export default TodoForm;