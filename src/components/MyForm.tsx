import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
    mytodo:string;
}

interface AddTodoProps {
    getdata: (data:string) => void;
}

const MyForm:React.FC<AddTodoProps> = ({getdata}) => {

    const {register,handleSubmit,reset} = useForm<FormProps>();

    const submitForm = (formdata:FormProps) => {
        //console.info(formdata);
        getdata(formdata.mytodo)
        reset();
    }


    return <>
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="text" {...register("mytodo")} id="mytodo" /> 
            <button type="submit">add todo</button>
        </form>
    </>
}

export default MyForm;