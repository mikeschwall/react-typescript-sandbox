import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/todoapi";

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const {isLoading,isSuccess,isError} = results;

    const handlePost = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199,
        })
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "Loading" : "send"}</button>
            {isSuccess && <h4>sent success</h4>}
            {data && data.slice(0,10).map((item:{id:number,title:string,completed:boolean}) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;