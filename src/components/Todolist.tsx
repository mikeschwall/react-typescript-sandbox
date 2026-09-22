import { Todo, useFetchTodosQuery } from "../store/apis/Todoapi";

const Todolist = () => {
    const {data} = useFetchTodosQuery(null);
    return (
        <div>
            <h2>Todos</h2>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default Todolist;