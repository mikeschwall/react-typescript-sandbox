import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { addTodo, AppActions, deleteTodo, fetchTodos, getMessage, Message, Todo } from '../actions';
import { AppState } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';
import TodoForm from './TodoForm';
import MyButton from './MyButton';

// interface StateProps {
//   todos: Todo[];
//   header: Message;
// }

// interface DispatchProps {
//   fetchTodos: () => void;
//   deleteTodo: typeof deleteTodo;
//   getMessage: typeof getMessage
// }

//type MergedProps = StateProps & DispatchProps;

const TodoList:React.FC = () => {

  const dispatch: ThunkDispatch<AppState, void, AppActions> = useDispatch();
  const todos = useSelector((state:AppState) => state.todos);
  const header = useSelector((state:AppState) => state.header);

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(getMessage({title:"hello"}));
  },[dispatch]);

  const handleData = (test:any) => {
    dispatch(addTodo({id:Math.random(),title:test,completed:false}))
  }

  const handleButtonClick = () => {
    dispatch(getMessage({title:"Button changed on click"}))
  }

  return (
    <div>
      <h2>Todos</h2>
      {header.title}
      <br/>
      <MyButton changeLabel={() => handleButtonClick()}>change header</MyButton>
      <TodoForm getData={handleData}/>
      {todos && todos.map(item => <li key={item.title}>{item.title}</li>)}
    </div>
  )
}

// const mapStateToProps = (state:AppState) => {
//   return {
//     todos: state.todos,
//     header: state.header
//   }
// }

// const mapDispatchProps = {
//   fetchTodos,
//   addTodo,
//   deleteTodo,
//   getMessage
// }

export default TodoList;