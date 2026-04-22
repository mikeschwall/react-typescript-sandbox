import { useContext } from "react";
import AuthContext from "../context/Store";

export function WithAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {

    const Wrapper = (props:P) => {

        const {logStatus} = useContext(AuthContext);

        if (!logStatus) return (
            <h2>Sorry you must log in before using</h2>
        )

        return <WrappedComponent {...props}></WrappedComponent>
    }

    return Wrapper;
    
}