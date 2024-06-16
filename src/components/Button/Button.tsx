import React from 'react';
import { SortButton } from './styled';

type ButtonPropsType = {
    name: string
    onClick: () => void
}
const Button = (props: ButtonPropsType) => {
    return (
        <SortButton onClick={props.onClick}>{props.name}</SortButton>
    );
};

export default Button;