import React, {FC} from 'react';
import {ContainerType} from "@/types/Container.types";
import styles from './Container.module.scss'

const Container: FC<ContainerType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default Container;