import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/store";

export function withAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {

    const ComponentWithAuth = (props:P) => {

        const {logStatus} = useContext(AuthContext);

        if (!logStatus) {
            return (
                <div>
                    <h2>Sorry Not logged in</h2>
                </div>
            )
        }

        return <WrappedComponent {...props}/>
    }

    return ComponentWithAuth;

}