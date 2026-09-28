import {useForm} from 'react-hook-form';

interface FormProps {
    getData:(d:any) => void;
}

const MyForm = ({getData}:FormProps) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleForm = (data:any) => {
        getData(data);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>
                <input type="text" id="mytodo" {...register("mytodo")}/> <button type="submit">add</button>
            </form>
        </div>
    )
}

export default MyForm;