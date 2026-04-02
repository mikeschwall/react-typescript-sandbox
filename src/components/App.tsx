import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './Todolist';
import SongList from './SongList';

const App:React.FC = () => {
   
    return (
        <>
        <SongList/>
       <TodoList/>
        </>
    )
}

export default App;