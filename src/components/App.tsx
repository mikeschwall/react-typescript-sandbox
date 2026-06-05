import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './Todolist';
import SongList from './Songlist';

const App:React.FC = () => {

   
    return (
        <>
        <SongList/>
        <hr/>
        <TodoList/>
        </>
    )
}

export default App;