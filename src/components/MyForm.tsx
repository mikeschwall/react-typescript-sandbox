import { useForm } from "react-hook-form";

export interface FormProps {
    getData(str:string):void;
}


const MyForm = ({getData}:FormProps) => {

    const {register,handleSubmit,reset} = useForm();

    const sendForm = (data:any) => {
        getData(data.mytodo);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(sendForm)}>
                <input id="mytodo" {...register("mytodo")} type="text" /> <button type="submit">send message</button>
            </form>
        </div>
    )
}

export default MyForm