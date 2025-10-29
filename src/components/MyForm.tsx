import { useForm } from "react-hook-form";

export interface FormProps {
    getdata: (t:any) => void;
}

const MyForm = ({getdata}:FormProps) => {

    const {reset,register,handleSubmit} = useForm();

    const handlePost = (data:any) => {
        getdata(data.mytodo)
        reset();
    }

    return <>
    <form onSubmit={handleSubmit(handlePost)}>
        <input type="text" id="mytodo" {...register("mytodo")} /> <button type="submit">send todo</button>
    </form>

    </>
}

export default MyForm;