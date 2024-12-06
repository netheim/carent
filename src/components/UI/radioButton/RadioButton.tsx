import React from 'react';
import styles from './RadioButton.module.scss'

const RadioButton = () => {
    return (
        <input
            className={styles.radioBtn}
            type='radio'
            name='radio'
            id='radioButton'
            value='radio'
        />

    );
};

export default RadioButton;