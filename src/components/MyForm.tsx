import { useForm } from "react-hook-form";

export interface FormProps {
    getData:(data:any) => void;
}

const MyForm = ({getData}:FormProps) => {

    const {register,handleSubmit,reset} = useForm();

    const handlePost = (d:any) => {
        getData(d.mytodo);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <input type="text" id="mytodo" {...register("mytodo")} /> <button type="submit">add</button>
            </form>
        </div>
    )
}

export default MyForm;