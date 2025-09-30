import { useContext } from "react";
import AuthContext from "../store/context";

function WithAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {
    const ComponentWithAuth = (props:P) => {
        const {logStatus} = useContext(AuthContext);
        if (!logStatus) {
            return (
                <h2>Sorry login first</h2>
            )
        }

        return <WrappedComponent {...props}></WrappedComponent>
    }

    return ComponentWithAuth;
}

export default WithAuth;