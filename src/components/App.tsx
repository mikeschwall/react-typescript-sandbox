import React from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import SongList from './SongList';

const App:React.FC = () => {

    return (
        <>
        <CssBaseline />
            <main style={{marginLeft:"20px"}}>
                <SongList/>
                <hr/>
                <TodoList/>
            </main>
        </>
    )
}

export default App;