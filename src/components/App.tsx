import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import Todolist from './Todolist';
import SongList from './SongList';

const App:React.FC = () => {

   
    return (
        <>
        <SongList/>
        <hr/>
        <Todolist/>
        </>
    )
}

export default App;