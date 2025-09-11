import { useForm } from "react-hook-form";

export interface FormProps {
    getdata(data:any):void;
}

const TodoForm = ({getdata}:FormProps) => {

    const {handleSubmit,reset,register} = useForm();

    const formSubmit = (formData:any) => {
        console.log(formData);
        getdata(formData.mytodo)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <input type="text" {...register("mytodo")} id="mytodo"/> <button type="submit">add todo</button>
        </form>
    )
}

export default TodoForm;