import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const TodoList = () => {
    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const {isLoading,isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => sendPost({title:"mike", body:"mike in house", id: 10})}>{isLoading ? "Loading..." : "Send"}</button>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;