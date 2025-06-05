import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/todoapi';

const TodoList:React.FC = () => {

    const {data} = useFetchTodosQuery(undefined);
    const [sendPost,results] = useSendPostMutation();

    const handlePost = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199,
        });
        console.log("results",results);
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>send</button>
            {data && data.map((item:any) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;