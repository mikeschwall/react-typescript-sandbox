import { useSelector } from "react-redux";
import { RootType } from "../store";
import { useFetchTodosQuery, useSendPostMutation } from "../store/apis/Todoapi";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendData,results] = useSendPostMutation();

    const handleData = () => {
        sendData({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })
    }

    const {isLoading,isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handleData()}>{isLoading ? "loading" : "fetch"}</button>
            {isSuccess && <div>Success</div>}
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;