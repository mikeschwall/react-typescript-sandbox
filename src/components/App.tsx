import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import AuthContext from '../context/Store';

const App:React.FC = () => {
    const {logStatus,logHandler} = useContext(AuthContext);
   
    return (
        <>
        <button onClick={() => logHandler()}>{logStatus === true ? "log out" : "log in"}</button>
        <TodoList/>
        </>
    )
}

export default App;