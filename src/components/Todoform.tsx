import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
    getData: (t:string) => void;
}

const Todoform:React.FC<FormProps> = ({getData}) => {

    const {register,handleSubmit} = useForm();

    const submitForm = (data:any) => {
        console.log(data);
        getData(data.mytodo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <input {...register('mytodo')} type="text" /><br/>
                <button>add todo</button>
            </form>
        </div>
    )
}

export default Todoform;