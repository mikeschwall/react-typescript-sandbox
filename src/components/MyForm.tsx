import { useForm } from "react-hook-form";

export interface FormProps {
    getData:(m:string) => void;
}

const MyForm = ({getData}:FormProps) => {

    const {register,handleSubmit,reset} = useForm();

    const handleForm = (d:any) => {
        getData(d.mytodo);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input type="text" id="mytodo" {...register("mytodo")} /> <button>add todo</button>
            </form>
        </div>
    )
}

export default MyForm;