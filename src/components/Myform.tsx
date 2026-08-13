import {useForm} from 'react-hook-form';

export interface FormProps {
    getData: (todo:any) => void;
}

const MyForm = ({getData}:FormProps) => {

    const {reset, register, handleSubmit} = useForm();

    const handleForm = (t:any) => {
        
        getData(t.mytodo);

        reset();
    }

    return <>
        <form onSubmit={handleSubmit(handleForm)}>
            <input type="text" id="mytodo" {...register("mytodo")} /> <button type="submit">add todo</button>
        </form>
    </>
}

export default MyForm;