import React from 'react';
import FilterBar from "@/components/filterBar/FilterBar";
import styles from './Category.module.scss'
import FilterBlock from "@/components/filterBlock/FilterBlock";
import Cars from "@/components/cars/Cars";

const Page = () => {
    return (
        <div className={styles.categoriesBlock}>
            <FilterBar />
            <div className={styles.categories}>
                <FilterBlock />
                <Cars start={0} end={4}/>
            </div>
        </div>
    );
};

export default Page;