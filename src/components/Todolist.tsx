import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/api/Todoapi';

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const TodoList:React.FC = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const {isLoading, isSuccess} = results;

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
            {isSuccess && <div>Request successful</div>}
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send request"}</button>
            {data && data.slice(0,9).map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;