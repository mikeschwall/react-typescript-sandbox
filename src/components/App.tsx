import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import MyButton from './MyButton';
import AuthContext from '../store/context';
import WithAuth from './Hoc';


const App:React.FC = () => {

    const {logStatus,logHandler} = useContext(AuthContext);

    const EnhancedButton = WithAuth(MyButton);

    const handleClick = () => {
        alert("test")
    }
   
    return (
        <>
        <CssBaseline />
            <div style={{marginLeft:"20px"}}>
                <button onClick={() => logHandler()}>{logStatus === true ? "log out" : "log in"}</button>
                <h2>Test</h2>
                <EnhancedButton changeLabel={() => handleClick()}>alert</EnhancedButton>
            </div>
        </>
    )
}

export default App;