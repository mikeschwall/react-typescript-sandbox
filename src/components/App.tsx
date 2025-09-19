import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';


const App:React.FC = () => {
   
    return (
        <>
        <CssBaseline />
            <div style={{marginLeft:"20px"}}>
                <TodoList/>
            </div>
        </>
    )
}

export default App;