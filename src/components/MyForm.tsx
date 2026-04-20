import { useForm } from "react-hook-form";

export interface FormProps {
    getdata: (d:any) => void;
}

const MyForm = ({getdata}:FormProps) => {

    const {register, reset, handleSubmit} = useForm(); 

    const handleForm = (t:any) => {

        getdata(t.mytodo)
        reset();
    }

    return (
        <div style={{padding:"20px 0"}}>
            <form onSubmit={handleSubmit(handleForm)}>
                <input type="text" {...register("mytodo")} id="mytodo"/> <button type="submit">add todo</button>
            </form>
        </div>
    )
}

export default MyForm;