import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
    getData:(message:string) => void;
}

const TodoForm:React.FC<FormProps> = ({getData}) => {
    const {register,handleSubmit} = useForm();

    const handleForm = (data:any) => {
        getData(data.mytodo);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)}>
             todo  <input type="text" {...register("mytodo")}/>
             <button type="submit">add</button>
            </form>
        </>
    )
}

export default TodoForm;