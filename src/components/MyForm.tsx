import {useForm} from 'react-hook-form';
import { Todo } from '../actions';

export interface FormProps {
    getData(t:any):void
}

const MyForm = ({getData}:FormProps) => {
    const {register, reset, handleSubmit} = useForm();

    const handleData = (t:any) => {
        getData(t.mytodo);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleData)}>
                <input type="text" {...register("mytodo")} id="mytodo"/> <button type="submit">add</button>
            </form>
        </div>
    )
}

export default MyForm;