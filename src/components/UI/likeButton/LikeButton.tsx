import React from 'react';
import styles from './LikeButton.module.scss'
import Image from "next/image";
import likeIcon from '@/../public/icons/like.svg'

const LikeButton = ({}) => {
    return (
        <button className={styles.likeBtn}>
            <Image src={likeIcon} alt='like' width={20} height={18} />
        </button>
    );
};

export default LikeButton;