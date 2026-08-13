import { useContext } from "react"
import AuthContext from "../context/store"

export default function WithAuth<P extends {}>(WrappedComponent: React.ComponentType<P>) {
    const Wrapper = (props:P) => {
        const {logStatus} = useContext(AuthContext);
        if (!logStatus) return (
            <h2>Sign in to view form</h2>
        )

        return <WrappedComponent {...props}></WrappedComponent>
    }

    return Wrapper;
}