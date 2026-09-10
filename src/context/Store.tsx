import React, { ReactNode, useMemo, useState } from 'react';

const AuthContext = React.createContext({
    logStatus: false,
    logHandler: () => {}
})

interface ContextProps {
    children: ReactNode;
}

export const AuthContextProvider = ({children}:ContextProps) => {

    const [logStatus,setLogStatus] = useState(false);

    const logHandler = () => {
        
        setLogStatus(status => status = !status);
    }

    const value = useMemo(() => ({logStatus,logHandler}),[logStatus]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthContext;