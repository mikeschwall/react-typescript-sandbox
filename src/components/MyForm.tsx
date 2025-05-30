import React from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
    getData: (text:string) => void;
}


const MyForm:React.FC<FormProps> = ({getData}) => {

    const {register, handleSubmit} = useForm();

    const handleForm = (data:any) => {
        
        getData(data.mytodo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input {...register("mytodo")} type="text" /> <button>add todo</button>
            </form>
        </div>
    )
}

export default MyForm;