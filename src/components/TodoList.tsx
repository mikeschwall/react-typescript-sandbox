import { useFetchTodosQuery } from "../store/apis/Todoapi";

interface Todo {
    id:number;
    title:string;
    completed: boolean;
}

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);

    return (
        <div>
            <h2>Todos</h2>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;