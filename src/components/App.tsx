import {connect} from 'react-redux';
import TodoList from "./TodoList";
import { fetchTodos, Todo } from '../actions';
import { AppState } from '../reducers';
import { fetchTodoSelector } from '../selectors';
import { useEffect } from 'react';


interface StateProps {
    initialTodos: Todo[];
    
}

interface DispatchProps {
    fetchTodos: () => void;
}

type MergedProps = StateProps & DispatchProps;

const App:React.FC<MergedProps> = ({initialTodos,fetchTodos}) => {


    useEffect(() => {
        fetchTodos();
    },[]);

    return (
        <div>
            <TodoList />
            {initialTodos && initialTodos.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

const mapStateToProps = (state:AppState) => {
    return {
        initialTodos: fetchTodoSelector(state)
    }
}

const mapDispatchToProps = {
    fetchTodos
}

export default connect(mapStateToProps,mapDispatchToProps)(App);