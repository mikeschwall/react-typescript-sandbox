import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import AuthContext from '../context/store';



const App:React.FC = () => {
    const {logStatus,logHandler} = useContext(AuthContext);

    return (
        <>
        <CssBaseline />
            <div style={{marginLeft:"20px"}}>
                <button onClick={() => logHandler()}>{logStatus === true ? "log out" : "log in"}</button>
                <TodoList/>
            </div>
        </>
    )
}

export default App;