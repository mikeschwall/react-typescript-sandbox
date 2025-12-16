import { useForm } from "react-hook-form";

export interface FormProps {
    getdata:(data:any) => void;
}

export const MyForm = ({getdata}:FormProps) => {
    const {reset,register,handleSubmit} = useForm();

    const handleForm = (d:any) => {

        getdata(d.mytodo)

        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input type="text" id="mytodo" {...register("mytodo")}/> <button type="submit">add todo</button>
            </form>
        </div>
    )

}

export default MyForm;