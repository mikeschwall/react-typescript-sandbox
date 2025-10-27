import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const[sendPost,results] = useSendPostMutation();

    const {isLoading,isSuccess} = results;

    const handlePost = () => {
        sendPost({
            title: 'foo',
    body: 'bar',
    userId: 1
        })
    }

    return (
        <div>
            <h2>Todos</h2>
            {isSuccess && <div>sent</div>}
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send"}</button>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;