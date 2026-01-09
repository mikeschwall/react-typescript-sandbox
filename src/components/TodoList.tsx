import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const handlePost = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199
        })
    }

    const {isLoading,isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "Loading..." : "Send"}</button>
            {isSuccess && <div>sent</div>}
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;