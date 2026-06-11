import { useForm } from "react-hook-form";

export interface FormProps {
    getdata:(t:any) => void;
}


const MyForm = ({getdata}:FormProps) => {

    const {register, handleSubmit, reset} = useForm();

    const formData = (t:any) => {
        getdata(t.mytodo);
        reset();
    }    

    return (
        <div>
            <form onSubmit={handleSubmit(formData)}>
                <input type="text" id="mytodo" {...register("mytodo")} /> <button type="submit">add</button>
            </form>
        </div>
    )
}

export default MyForm;