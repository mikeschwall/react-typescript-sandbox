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
    const {isSuccess, isLoading} = results;

    const handlePost = () => {
        console.log(results);
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199
        })
    }

    return (
        <section>
            <h2>Todos</h2>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <p>Your request was successfully sent</p>}
            <button onClick={() => handlePost()}>send request</button>
            {data && data.slice(0,10).map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </section>
    )
}

export default TodoList;