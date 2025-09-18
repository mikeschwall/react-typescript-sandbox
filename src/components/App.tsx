import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import SongList from './SongList';


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