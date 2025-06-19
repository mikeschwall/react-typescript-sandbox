import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/Todoapi';

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const TodoList:React.FC = () => {

    const {data} = useFetchTodosQuery(undefined);
    const [sendPost,results] = useSendPostMutation();
    const {isSuccess} = results;
    
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
            <button onClick={() => handlePost()}>send</button>
            {isSuccess && <p>Your click was successful</p>}
            {data && data.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;