import { Todo } from "../store";
import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const handleClick = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199,
        })
    }

    const {isLoading,isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            {isSuccess && <div>sent</div>}
            <button onClick={() => handleClick()}>{isLoading ? "loading" : "send"}</button>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;