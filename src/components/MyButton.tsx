import { ReactNode } from "react"

export interface ButtonProps {
    children: ReactNode;
    changeLabel: () => void;
}

const MyButton = ({children,changeLabel}:ButtonProps) => {
    return <>
    <button onClick={changeLabel}>{children}</button>
    </>
}

export default MyButton;