import React, { useEffect, useState } from 'react';

function withAuth<P extends {}>(WrappedComponent:React.ComponentType<P>) {
    const ComponentWithAuth = (props:P) => {

        const [logStatus,setLogStatus] = useState(false);

        useEffect(() => {
            setLogStatus(false);
        },[]);

        if (!logStatus) {
            return (
                <h2>Not logged in</h2>
            )
        }

        return <WrappedComponent {...props} />
    }

    return ComponentWithAuth;
}

export default withAuth;