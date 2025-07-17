import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import { withAuth } from './Hoc';
import AuthContext from '../context/store';
import SongList from './SongList';

const EnhancedTodo = withAuth(TodoList);

const App:React.FC = () => {

    const {logStatus,logHandler} = useContext(AuthContext);

    return (
        <>
        <CssBaseline />
            <div style={{marginLeft:"20px"}}>
                <header>
                    <button onClick={() => logHandler()}>{logStatus === true ? "log out" : "log in"}</button>
                </header>
                <main>
                    
                    <SongList/>
                    <hr/>
                    <EnhancedTodo/>
                    
                </main>
            </div>
        </>
    )
}

export default App;