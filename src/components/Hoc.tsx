import { useContext } from "react";
import AuthContext from "../context/Store";

export function WithAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {
    
    function Wrapper(props:P) {

        const {logStatus} = useContext(AuthContext);
        if (!logStatus) return (
            <div>Log in to use form</div>
        )

        return <WrappedComponent {...props}></WrappedComponent>
    }

    return Wrapper;
}