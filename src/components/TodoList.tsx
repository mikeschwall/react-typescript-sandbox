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
    userId: 199,
        })
    }

    const {isLoading,isSuccess,isError} = results;


    return (
        <div>
            <h2>Todos</h2>
            {isLoading && <div>Loading...</div>}
            {isSuccess && "your post went through"}
            <button onClick={() => handlePost()}>{isLoading ? "Loading" : "send"}</button>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;