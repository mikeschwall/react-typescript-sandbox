import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
    mylabel:string;
    changeLabel: () => void;
}

const MyButton:React.FC<ButtonProps> = ({mylabel,changeLabel}) => {
    return <>
        <Button onClick={changeLabel} variant="contained">{mylabel}</Button>
    </>
}

export default MyButton;