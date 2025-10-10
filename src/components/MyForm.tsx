import { useForm } from "react-hook-form";

export interface FormProps {
    getdata: (t:string) => void;
}

const MyForm = ({getdata}:FormProps) => {

    const {register,reset,handleSubmit} = useForm();

    const sendData = (t:any) => {
        console.log(t)
        getdata(t.mytodo)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(sendData)}> 
            <input type="text" {...register("mytodo")} name="mytodo" id="mytodo"/>
            <button type="submit">send</button>
        </form>
    )
}

export default MyForm;