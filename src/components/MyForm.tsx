import { useForm } from "react-hook-form";

export interface FormProps {
    getdata:(str:string) => void;
}

const MyForm = ({getdata}:FormProps) => {

    const {register,reset,handleSubmit} = useForm();

    const handlePost = (data:any) => {
        console.log(data.mytodo);
        getdata(data.mytodo);
        reset();
    }

    return (
        <>
        <form onSubmit={handleSubmit(handlePost)}>
            <input {...register("mytodo")} type="text" id="mytodo" name="mytodo" /> <button>add todo</button>
        </form>
        </>
    )
}

export default MyForm;