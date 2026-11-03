import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import Todolist from './Todolist';
import Songlist from './Songlist';

const App:React.FC = () => {

  
    return (
        <>
        <Songlist/>
        <Todolist/>
        </>
    )
}

export default App;