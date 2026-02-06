import { useForm } from "react-hook-form";

export interface FormProps {
    getData: (d:any) => void;
}


const MyForm = ({getData}:FormProps) => {

    const {handleSubmit, register, reset} = useForm();

    const handleForm = (d:any) => {

        getData(d.mytodo)
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input type="text" {...register("mytodo")} id="mytodo" /> <button>add todo</button>
            </form>
        </div>
    )
}

export default MyForm;