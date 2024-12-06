import React, {FC} from 'react';
import styles from './Car.module.scss'
import LikeButton from "@/components/UI/likeButton/LikeButton";
import {CarType} from "@/types/Car.types";
import Image from "next/image";
import RentButton from "@/components/UI/rentButton/RentButton";
import gasIcon from '@/../public/icons/gas.svg'
import typeIcon from '@/../public/icons/type.svg'
import peopleIcon from '@/../public/icons/people.svg'
import Link from "next/link";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import useGlobalState from "@/app/store/favoriteState";

const Car:FC<CarType> = ({id, name, type, volume, manual, count, price, image}) => {

    const { ids, toggleId } = useGlobalState();

    return (
        <div className={styles.carItem}>
            <div className={styles.carItemTop}>
                <div className={styles.mainInfo}>
                    <h1 className={styles.name}>{name}</h1>
                    <h3 className={styles.type}>{type}</h3>
                </div>
                <Checkbox icon={<FavoriteBorder />} security={'123'} checked={ids.includes(String(id))} checkedIcon={<Favorite color={'error'}/>} onChange={() => toggleId(String(id))} />

            </div>
            <div className={styles.carItemMid}>
                <Image src={image} alt='car' layout="responsive" width={100} height={100} />
            </div>
            <div className={styles.carItemBot}>
                <div className={styles.about}>
                    <div className={styles.aboutItem}>
                        <Image src={gasIcon} alt='gas' />
                        <span className={styles.info}>{volume}</span>
                    </div>
                    <div className={styles.aboutItem}>
                        <Image src={typeIcon} alt='type' />
                        <span className={styles.info}>{manual}</span>
                    </div>
                    <div className={styles.aboutItem}>
                        <Image src={peopleIcon} alt='people' />
                        <span className={styles.info}>{count}</span>
                    </div>

                </div>
                <div className={styles.rent}>
                    <div className={styles.rentPrice}>
                        ${price}<span style={{fontSize: 21}}>/</span> <span className={styles.day}>day</span>
                    </div>
                    <Link href={'/details/' + id}><RentButton color={'blue'} children={'Rent Now'}/></Link>
                </div>
            </div>

        </div>
    );
};

export default Car;