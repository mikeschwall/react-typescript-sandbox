import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import Todolist from './Todolist';
import AuthContext from '../context/Store';

const App:React.FC = () => {

    const {logStatus,logHandler} = useContext(AuthContext);

   
    return (
        <>
        <button onClick={() => logHandler()}>{logStatus === true ? "log out" : "log in"}</button>
        <Todolist/>
        
        </>
    )
}

export default App;