import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}



const Todolist = () => {
    const [sendPost,results] = useSendPostMutation();

    const handleClick = () => {
    sendPost({
        title: 'foo99',
    body: 'bar99',
    userId: 199
    })
    }

    const {isLoading,isSuccess} = results;

    const {data} = useFetchTodosQuery(null);
    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handleClick()}>{isLoading ? "loading":"click here"}</button>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;