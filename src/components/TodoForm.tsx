import React from 'react';
import { useForm } from 'react-hook-form';
import { Todo } from '../actions';

interface FormProps {
    getData: (t:Todo) => void;
}

interface FormData {
    mytodo: string;
}

const TodoForm:React.FC<FormProps> = ({getData}) => {

    const {register,handleSubmit,reset} = useForm<FormData>();
    const formSubmit = (data:FormData) => {
        const todo = {
            id: Math.random(),
            title: data.mytodo,
            completed: false
        }
        getData(todo);
        reset();
    } 

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <input {...register("mytodo")} type="text"  /> <button type="submit">add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;