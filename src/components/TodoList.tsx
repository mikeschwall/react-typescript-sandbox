import { Todo } from "../store";
import { useFetchTodosQuery } from "../store/apis/Todoapi";

const TodoList = () => {

    const {data} = useFetchTodosQuery(null);

    return (
        <div>
            <h2>Todos</h2>
            {data && data.map((item:Todo)=> <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;