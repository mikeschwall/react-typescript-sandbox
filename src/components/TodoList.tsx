import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

export interface Todo {
    id:number;
    title:string;
    completed: boolean;
}

const TodoList = () => {
    const {data:todos} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();
    const {isLoading,isSuccess} = results;

    const handlePost = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send post"}</button>
            {isSuccess && <div>Message sent</div>}
            {todos?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;