import React, { ReactNode } from 'react';

interface ButtonProps {
    changeLabel:() => void;
    children: ReactNode;
}

const MyButton:React.FC<ButtonProps> = ({changeLabel,children}) => {
    return <>
        <button onClick={changeLabel}>{children}</button>
    </>
}

export default MyButton;