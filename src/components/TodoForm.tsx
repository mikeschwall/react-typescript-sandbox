import { useForm } from "react-hook-form"

export interface FormProps {
    getTodo: (str:string) => void;
}

export const TodoForm:React.FC<FormProps> = ({getTodo}) => {

    const {reset,register,handleSubmit} = useForm();

    const handleForm = (data:any) => {
        getTodo(data.mytodo);
        reset();
    }

    return (
        <>
        <form onSubmit={handleSubmit(handleForm)}>
            <label htmlFor="mytodo">Todo</label>
            <input {...register("mytodo")} type="text" name="mytodo" id="mytodo"/>
            <button>add todo</button>
        </form>
        </>
    )
}