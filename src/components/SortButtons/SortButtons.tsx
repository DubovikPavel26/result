import React from 'react';
import Button from '../Button/Button.tsx';
import { Buttons } from './styled.js';

type SortButtonsPropsType = {
    handleSortByAscYear: () => void;
    handleSortByDescYear: () => void;
}

const SortButtons = (props: SortButtonsPropsType) => {
    return (
        <Buttons>
            <Button name='Sorting by ascending year of creation' onClick={props.handleSortByAscYear} />
            <Button name='Sorting in descending order of the year of creation' onClick={props.handleSortByDescYear} />
        </Buttons>
    );
};

export default SortButtons;