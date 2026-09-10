import {useForm} from 'react-hook-form'
import { Todo } from '../actions';

export interface FormProps {
    getData(t:Todo):void;
}

export const MyForm = ({getData}:FormProps) => {

    const {register,reset,handleSubmit} = useForm();

    const handlePost = (mytodo:any) => {
        console.log(mytodo);
        const todo = {id:Math.random(), title: mytodo.mytodo, completed: true}
        getData(todo);

        reset();
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit(handlePost)}>
                <input type="text" {...register("mytodo")} id="mytodo" /> <button type="submit">add food</button>
            </form>
        </div>
    )
}