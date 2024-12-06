import React, {FC} from 'react';
import styles from './GraySelect.module.scss'

type GraySelectType = {
    options: string[]
}

const GraySelect:FC<GraySelectType> = ({options}) => {
    return (
        <div className={styles.graySelectBlock}>
            <select className={styles.graySelect}>
                <option disabled value="">Select your city</option>
                {options.map((option, index) => (
                    <option key={index} value="">{option}</option>
                ))}
            </select>
        </div>
    );
};

export default GraySelect;