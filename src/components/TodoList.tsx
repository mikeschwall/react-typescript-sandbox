import { useDispatch } from "react-redux";
import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

interface Todo {
    id:number;
    title:string;
    completed: boolean;
}

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost, results] = useSendPostMutation();

    const handlePost = () => {
        sendPost({
        title: 'foo9',
    body: 'bar9',
    userId: 19,
    })
    }

    const {isLoading, isSuccess, isError} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send"}</button>
            {isSuccess && <div>Success</div>}
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;