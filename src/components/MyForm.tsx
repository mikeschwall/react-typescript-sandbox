import { useForm } from "react-hook-form";

interface FormProps {
    getdata:(d:string) => void;
}

export const MyForm = ({getdata}:FormProps) => {

    const {register,reset,handleSubmit} = useForm();
    const handleForm = (data:any) => {
        getdata(data.mydata);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input type="text" id="mydata" {...register("mydata")} />
                <button type="submit">add todo</button>
            </form>
        </div>
    )
}