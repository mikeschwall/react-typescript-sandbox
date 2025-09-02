import { useForm } from "react-hook-form";

interface TodoFormProps {
    getdata: (d:string) => void;
}

const TodoForm = ({getdata}: TodoFormProps) => {

    const {handleSubmit, register, reset} = useForm();

    const handleForm = (formdata:any) => {
        console.log(formdata);
        getdata(formdata);
        reset();
    }

    return (
        <>
        <form onSubmit={handleSubmit(handleForm)}>
            <input {...register("mytodo")} type="text" name="mytodo" id="mytodo"/> <button>add todo</button>
        </form>
        </>
    )
}

export default TodoForm;