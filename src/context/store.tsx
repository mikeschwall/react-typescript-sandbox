import React, { useMemo, useState } from 'react';

const AuthContext = React.createContext({
    logStatus: false,
    logHandler: () => {}
})

export interface ProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider:React.FC<ProviderProps> = ({children}) => {

    const [logStatus,setLogStatus] = useState(false);
    const logHandler = () => {
        setLogStatus(status => !status);
    }

    const value = useMemo(() => ({logStatus,logHandler}),[logStatus]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;