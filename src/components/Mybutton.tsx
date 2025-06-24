import { ReactNode } from "react";

export interface ButtonProps {
    children:ReactNode;
    changeLabel: () => void;
}

const MyButton: React.FC<ButtonProps> = ({children,changeLabel}) => {
    return <>
        <button onClick={changeLabel}>{children}</button>
    </>
}

export default MyButton;