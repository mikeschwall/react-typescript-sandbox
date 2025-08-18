import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/todoapi';

export interface Todo {
    id: number;
    title:string;
    completed: boolean;
}

const TodoList:React.FC = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();

    const handleData = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199
        })
    }

    const {isLoading, isSuccess} = results;


    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handleData()}>{isLoading ? "loading" : "send request"}</button>
            {isSuccess && <div>Request successfully made</div>}
            {data && data.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;