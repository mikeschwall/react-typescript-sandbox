import { useContext } from "react";
import { AuthContext } from "../context/Store";

export default function WithAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {

    const Wrapper = (props:P) => {
        const {logStatus} = useContext(AuthContext);
        if (!logStatus) return (
            <p>Please sign in to view form</p>
        )
        return <WrappedComponent {...props}></WrappedComponent>
    }

    return Wrapper;
}