import React, { useContext } from "react";
import AuthContext from "../context/Store";

export default function WithAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {
    const Wrapper = (props:P) => {
        const {logStatus} = useContext(AuthContext);
        if (!logStatus) return (
            <h2>Please log in first</h2>
        )
        return <WrappedComponent {...props}></WrappedComponent>
    }

    return Wrapper;
}