import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi"

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const Todolist = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();
    const handlePost = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199,
        })
    }

    const {isLoading, isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send"}</button>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist