import React from 'react';
import styles from './FilterButton.module.scss'
import Image from "next/image";
import filterBtnIcon from '@/../public/icons/filter.svg'

const FilterButton = () => {
    return (
        <button className={styles.filterBtn}>
            <Image src={filterBtnIcon} alt='filter' width={24} height={24} />
        </button>
    );
};

export default FilterButton;