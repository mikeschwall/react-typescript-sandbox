import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const Todolist = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost, results] = useSendPostMutation();
    const handleClick = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199,
        })
    }

    const {isLoading} = results;

    return <>
        <h2>Todos</h2>
        <button onClick={() => handleClick()}>{isLoading ? "Loading" : "send"}</button>
        {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
    </>
}

export default Todolist;