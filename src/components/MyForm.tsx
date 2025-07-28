import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
    getData(str:string):void;
}

const TodoForm:React.FC<FormProps> = ({getData}) => {

    const {register,handleSubmit,reset} = useForm();
    const submitForm = (data:any) => {
        console.log(data);
        getData(data.todovalue);
        reset();
    }

    return <>
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="text" id="todovalue" {...register("todovalue")} /> <button>add todo</button>
        </form>
    </>
}

export default TodoForm;