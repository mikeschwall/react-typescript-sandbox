import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './Todolist';
import SongList from './Songlist';



const App:React.FC = () => {

    return (
        <>
        <CssBaseline />
            <div style={{marginLeft:"20px"}}>
                <SongList/>
                <hr/>
                <TodoList/>
            </div>
        </>
    )
}

export default App;