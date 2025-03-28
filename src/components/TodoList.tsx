import { FormEvent, useRef } from "react"
import {connect} from 'react-redux';
import { addTodo } from "../actions";

interface DispatchProps {
    addTodo: typeof addTodo;
}

const TodoList:React.FC<DispatchProps> = ({addTodo}) => {

    const mytodo = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        if (mytodo.current) {
            addTodo({id:Math.random(),title:mytodo.current.value,completed:false})
        }
        

    }
    
    return (
        <div>
            <h2>Todos</h2>
            <form onSubmit={handleSubmit}> 
                <input type="text" ref={mytodo}/>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addTodo:addTodo
}

export default connect(null,mapDispatchToProps)(TodoList)