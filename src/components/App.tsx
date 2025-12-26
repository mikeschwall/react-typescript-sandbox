import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import Songlist from './Songlist';

const App:React.FC = () => {
   
    return (
        <>
        <Songlist/>
        <hr/>
        <TodoList/>
        </>
    )
}

export default App;