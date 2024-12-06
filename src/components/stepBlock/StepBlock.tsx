import React, {FC} from 'react';
import styles from "./StepBlock.module.scss";

type StepBlockType = {
    title: string,
    hint: string,
    step: string,
}

const StepBlock:FC<StepBlockType> = ({title, hint, step}) => {
    return (
        <div className={styles.step}>
            <div className={styles.stepTitle}>
                <h1 className={styles.stepName}>{title}</h1>
                <span className={styles.stepHint}>{hint}</span>
            </div>
            <div className={styles.stepHint}>
                {step}
            </div>
        </div>
    );
};

export default StepBlock;