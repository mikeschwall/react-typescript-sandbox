import {useForm} from 'react-hook-form';

export interface FormProps {
    getData(d:any):void;
}

const MyForm = ({getData}:FormProps) => {

    const { register, handleSubmit, reset} = useForm();
    const handleData = (d:any) => {
        getData(d.mytodo);
        reset();
    }

    return <>
    <form onSubmit={handleSubmit(handleData)}>
        <input type="text" {...register("mytodo")} id="mytodo" /> <button type="submit">add todo</button>
    </form>
    </>
}

export default MyForm;