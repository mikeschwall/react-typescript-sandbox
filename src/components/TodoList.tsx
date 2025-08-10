import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from '../store/apis/todoapi';

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
            userId: 199,
        })
    }

    const {isLoading,isSuccess} = results;

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handlePost()}>{isLoading ? "loading" : "send request"}</button><br/>
            {isSuccess && <div style={{margin:"20px"}}>Your request was sent successfully</div>}
            {data && data.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;