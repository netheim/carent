import React, {FC} from 'react';
import styles from './MyInput.module.scss';

type MyInputTypes = {
    placeholder?: string;
    type: string;
    color: string;
}

const MyInput:FC<MyInputTypes> = ({placeholder, type, color}) => {
    return (
        <input type={type} className={color === 'gray' ? styles.grayInput: color === 'white' ? styles.whiteInput: ''} placeholder={placeholder} />
    );
};

export default MyInput;