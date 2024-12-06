import React, {FC} from 'react';
import styles from './Commentary.module.scss'

import Image from "next/image";
import {CommentType} from "@/types/Comment.types";
import ActiveStar from "../../../public/icons/ActiveStar.svg";
import Star from "../../../public/icons/Star.svg";

const Commentary:FC<CommentType> = ({image, name, work, date, comment}) => {
    return (
        <div className={styles.commentaryBlock}>
            <div className={styles.userMark}>
                <div className={styles.user}>
                    <Image src={image} alt='123' />
                    <div className={styles.userInfo}>
                        <h1 className={styles.name}>{name}</h1>
                        <h2 className={styles.work}>{work}</h2>
                    </div>
                </div>
                <div className={styles.mark}>
                    <span className={styles.date}>
                        {date}
                    </span>
                    <div className={styles.stars}>
                        <Image src={ActiveStar} alt='star' />
                        <Image src={ActiveStar} alt='star' />
                        <Image src={ActiveStar} alt='star' />
                        <Image src={ActiveStar} alt='star' />
                        <Image src={Star} alt='star' />
                    </div>
                </div>
            </div>
            <div className={styles.comment}>
                <p>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default Commentary;