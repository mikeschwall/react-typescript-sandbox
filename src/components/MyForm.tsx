import { useForm } from "react-hook-form";

export interface FormProps {
    getData(d:any): void;
}

const MyForm = ({getData}:FormProps) => {

    const {handleSubmit, reset, register} = useForm();

    const handleClick = (t:any) => {
        //alert(JSON.stringify(t))
        getData(t.mytodo)
        reset();
    }

    return (
        <div style={{margin:"10px"}}>
            <h4>Form</h4>
            <form onSubmit={handleSubmit(handleClick)}>
                <input type="text" id="mytodo" {...register("mytodo")} /> <button type="submit">add todo</button>
            </form>
        </div>
    )
}

export default MyForm;