import { useForm } from "react-hook-form";

interface FormProps {
    getData: (title:string) => void;
}

const TodoForm = ({getData} : FormProps) => {

    const {reset, handleSubmit, register} = useForm();

    const formSubmit = (data:any) => {
        console.log(data);
        getData(data.mytodo);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <input type="text" id="mytodo" {...register("mytodo")} /> <button type="submit">submit</button>
        </form>
    )
}

export default TodoForm;