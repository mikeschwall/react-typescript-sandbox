import { useContext } from "react";
import AuthContext from "../store/context";

export function WithAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {
    const ComponentWithAuth = (props:P) => {

        const {logStatus} = useContext(AuthContext)
        console.log(logStatus)
    

        if (!logStatus) return (
            <h2>Not logged in</h2>
        )

        return <WrappedComponent {...props} />
    }

    return ComponentWithAuth;
}

export default WithAuth;