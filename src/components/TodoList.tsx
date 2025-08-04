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

    const handlePost = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })
    }

    const {isLoading,isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send"}</button><br/>
            {isSuccess && <div>your post was sent</div>}
            {data && data.slice(0,10).map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;