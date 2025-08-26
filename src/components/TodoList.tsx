import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

export interface Todo {
    id: number;
    title:string;
    completed: boolean;
}

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const {isLoading, isSuccess} = results;

    const handleSend = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })
    }
    
    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handleSend()}>{isLoading ? "Loading" : "Send Post"}</button>
            {isSuccess && <div style={{margin:"10px"}}>success</div>}
            {data && data.slice(0,10).map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;