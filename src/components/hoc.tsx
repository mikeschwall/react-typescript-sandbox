import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/store";

function withAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {
    const ComponentWithAuth:React.FC<P> = (props:P) => {
        const {logStatus} = useContext(AuthContext);
        
        if (!logStatus) return (
            <h2>you're not logged in</h2>
        )

        return <WrappedComponent {...props}></WrappedComponent>
    }
    return ComponentWithAuth
}

export default withAuth;