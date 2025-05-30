import React, { ReactNode } from 'react';

export interface ButtonProps {
    children:ReactNode;
    changeLabel: () => void;
}

const MyButton:React.FC<ButtonProps> = ({changeLabel,children}) => {
    return <>
        <button onClick={changeLabel}>{children}</button>
    </>
}

export default MyButton;