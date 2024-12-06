import React, {FC} from 'react';
import styles from './RentButton.module.scss'
import {RentButtonType} from "@/types/RentButton.types";

const RentButton:FC<RentButtonType> = ({children, color}) => {


    return (
        <button className={color === 'blue' ? [styles.rentBtn, styles.blue].join(' ') : [styles.rentBtn, styles.ice].join(' ')}>
            {children}
        </button>
    );
};

export default RentButton;