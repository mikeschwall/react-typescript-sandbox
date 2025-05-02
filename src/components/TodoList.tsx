import React, { FormEvent, useEffect, useRef } from 'react';
import {connect, useDispatch} from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { addTodo, deleteTodo, fetchTodos, getMessage, Message, Todo } from '../actions';
import { AppState } from '../reducers';
import { Box, Button, Container, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import MyButton from './MyButton';


interface StateProps {
    todos:Todo[];
    header: Message;
}

interface DispatchProps {
    fetchTodos: () => void;
    deleteTodo: typeof deleteTodo;
    getMessage: typeof getMessage;
    addTodo: typeof addTodo;
}

type MergedProps = StateProps & DispatchProps;

const TodoList:React.FC<MergedProps> = ({todos,fetchTodos,deleteTodo,header,getMessage,addTodo}) => {

    const inputRef = useRef<HTMLInputElement>(null);
    

    useEffect(() => {
        fetchTodos();
    },[fetchTodos]);

    const handleClick = (t:string) => {
        getMessage({title:t})
    }

    const handleSubmit = (event: FormEvent) => {
        console.log('addTodo:', addTodo);
        
        event.preventDefault();
        const value = inputRef.current?.value?.trim();
        if (value) {
            console.log(value);
          addTodo({id:Math.random(),completed:false, title: value})
          if (inputRef.current) {
            inputRef.current.value = ''; // clear input
          }
        }
      };

    return <>
        <h2>Todos</h2>
        {header.title !== "hello" ? <h4>{header.title}</h4> : null}
        <Container>
  <Stack direction="row" spacing={2} alignItems="center">
    <MyButton
      mylabel="change stuff"
      changeLabel={() => handleClick("message added")}
    />
    <form onSubmit={handleSubmit}>
    <TextField
    inputRef={inputRef}
      id="standard-basic"
      label="Add a todo"
      variant="standard"
    />
    <Button type='submit' variant="text">Submit</Button>
    </form>
  </Stack>
</Container>
        <List>
            {todos && todos.map(item => <ListItem style={{borderBottom:"1px solid #ccc",marginBottom:"10px",marginTop:"10px"}} key={item.id}>{item.title} 
                <Button onClick={() => deleteTodo(item.id)} style={{marginTop:"-10px",position:"absolute",right:"0"}} variant="outlined">Delete</Button>
            </ListItem>)}
        </List>
    </>
}

const mapStateToProps = (state:AppState) => {
    return {
        todos: state.todos,
        header: state.header
    }
}

const mapDispatchToProps = {
    fetchTodos,
    deleteTodo,
    getMessage,
    addTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);