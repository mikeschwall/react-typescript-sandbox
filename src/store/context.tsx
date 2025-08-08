import React, { useMemo, useState } from 'react';

const AuthContext = React.createContext({
    logStatus: false,
    logHandler: () => {}
})

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider:React.FC<AuthContextProviderProps> = ({children}) => {

    const [logStatus,setLogStatus] = useState(false);

    const logHandler = () => {
        setLogStatus(status => !status);
    }

    const memoValue = useMemo(() => ({logStatus,logHandler}),[logStatus])

    return <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
}

export default AuthContext;