import { useForm } from "react-hook-form";

export interface FormProps {
    getdata:(str:string) => void;
}

const MyForm = ({getdata}:FormProps) => {

    const {register,reset,handleSubmit} = useForm();

    const handlePost = (data:any) => {

        getdata(data.mytodo)

        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <input id="mytodo" {...register("mytodo")} type="text" /> <button>add todo</button>
            </form>
        </div>
    )
}

export default MyForm;