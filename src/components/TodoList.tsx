import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/Todoapi';

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
        console.info(results);
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()} disabled={isLoading}>{isLoading ? "loading" : "send post"}</button><br/>
            {data && data.slice(0,9).map((item:Todo) => <li key={item.title}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;