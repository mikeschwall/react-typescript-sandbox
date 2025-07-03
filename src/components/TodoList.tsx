import React from 'react';
import { useSelector } from 'react-redux';
import { RootType } from '../store';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/Todoapi';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoList:React.FC = () => {

    const {data} = useFetchTodosQuery(null);
    const [sendPost,results] = useSendPostMutation();
    console.info(results);
    const {isSuccess,isLoading} = results;
    const handlePost = () => 
        sendPost({
            title: 'title99',
            body: 'bar99',
            userId: 199
        })

    return (
        <div>
            <h2>Todos</h2>
            { isLoading && <p>Loading</p> }
           {!isSuccess ? <button onClick={() => handlePost()}>Send request</button> : <p>success</p>}
            {data && data.slice(0,10).map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;