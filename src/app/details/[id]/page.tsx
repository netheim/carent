"use client"

import React from 'react';
import { use } from 'react';
import styles from './Details.module.scss'
import FilterBar from "@/components/filterBar/FilterBar";
import {Checkbox, Slide} from '@mui/material';
import Slider from "@/components/UI/slider/Slider";
import view1 from '@/../public/slider/View.png';
import view2 from '@/../public/slider/View2.jpg';
import view3 from '@/../public/slider/View3.jpg';
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import ActiveStar from '@/../public/icons/ActiveStar.svg'
import Star from '@/../public/icons/Star.svg'
import Image from "next/image";
import Link from "next/link";
import RentButton from "@/components/UI/rentButton/RentButton";
import Commentary from "@/components/commentary/Commentary";
import Avatar from '@/../public/profiles/Profill.png'
import Avatar2 from '@/../public/profiles/Profill (1).png'
import arrowBtn from '@/../public/icons/botArrow.svg'
import Cars from "@/components/cars/Cars";

const Page = ({params} : {params: Promise<{id: string }>}) => {
    const images = [
        view1,
        view2,
        view3,

    ];

    const avatars = [
        Avatar,
        Avatar2,
    ]
    const {id} = use(params);
    return (
        <div className={styles.detailsBlock}>
            <FilterBar />
            <div className={styles.details}>
                <div className={styles.carDetails}>
                    <div className={styles.carImages}>
                        <Slider images={images}/>
                    </div>
                    <div className={styles.carInfo}>
                        <div className={styles.infoFirst}>
                            <div className={styles.nameAndReviews}>
                                <h1 className={styles.carName}>Nissan GT- R</h1>
                                <div className={styles.reviews}>
                                    <div className={styles.stars}>
                                        <Image src={ActiveStar} alt='star' />
                                        <Image src={ActiveStar} alt='star' />
                                        <Image src={ActiveStar} alt='star' />
                                        <Image src={ActiveStar} alt='star' />
                                        <Image src={Star} alt='star' />
                                    </div>
                                    <span className={styles.count}>
                                        440+ Reviewer
                                    </span>
                                </div>
                            </div>
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'error'}/>} />


                        </div>
                        <div className={styles.infoSecond}>
                            <p>
                                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                            </p>
                        </div>
                        <div className={styles.infoThird}>
                            <div className={styles.feature}>
                                <span className={styles.title}>
                                    Type Car
                                </span>
                                <span className={styles.value}>
                                    Sport
                                </span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.title}>
                                    Capacity
                                </span>
                                <span className={styles.value}>
                                    2 Person
                                </span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.title}>
                                    Steering
                                </span>
                                <span className={styles.value}>
                                    Manual
                                </span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.title}>
                                    Gasoline
                                </span>
                                <span className={styles.value}>
                                    70L
                                </span>
                            </div>

                        </div>

                        <div className={styles.infoFourth}>
                            <div className={styles.rent}>
                                <div className={styles.rentPrice}>
                                    $80.00<span style={{fontSize: 28}}>/</span> <span className={styles.day}>days</span>
                                </div>
                                <Link href={'/rent/' + id}><RentButton color={'blue'} children={'Rent Now'}/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.commentaries}>
                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>Reviews</h1>
                        <div className={styles.count}>
                            13
                        </div>
                    </div>

                    <div className={styles.comments}>
                        {
                            avatars.length ?
                                avatars.map((item, i) => {
                                    return (
                                        <Commentary key={i} image={item} name={'Alex Stanton'} work={'CEO at Meta'} date={'21 July 2022'} comment={'' +
                                            'We are very happy with the service from the MORENT App. ' +
                                            'Morent has a low price and also a large variety of cars with good and comfortable facilities. ' +
                                            'In addition, the service provided by the officers is also very friendly and very polite.'}
                                        />
                                    )
                                }) : null
                        }
                    </div>
                    <div className={styles.button}>
                        <button className={styles.showAll}>
                            Show All
                            <Image src={arrowBtn} alt='arr' />
                        </button>
                    </div>

                </div>
                <Cars titles={['Popular Cars', 'Recommendation Cars']} start={4} end={2}/>
            </div>

        </div>
    );
};

export default Page;