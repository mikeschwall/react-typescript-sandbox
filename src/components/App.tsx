import React from 'react';
import { CssBaseline } from '@mui/material';
import Todolist from './Todolist';

const App:React.FC = () => {
    return (
        <>
        <CssBaseline />
            <div style={{marginLeft:"20px"}}>
                <Todolist/>
            </div>
        </>
    )
}

export default App;