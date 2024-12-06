import React from 'react';
import styles from './Rent.module.scss'
import Container from "@/components/container/Container";
import MyInput from "@/components/UI/myInput/MyInput";
import StepBlock from "@/components/stepBlock/StepBlock";
import Image from "next/image";
import mark from '@/../public/icons/Mark.svg'
import GraySelect from "@/components/UI/graySelect/GraySelect";
import Payment from "@/components/payment/Payment";
import RentButton from "@/components/UI/rentButton/RentButton";
import security from '@/../public/img/security.png'
import car from '@/../public/img/Look.png'
import ActiveStar from "../../../../public/icons/ActiveStar.svg";
import Star from "../../../../public/icons/Star.svg";

const Page = () => {
    return (
        <div className={styles.rentPage}>
            <Container>
                <div className={styles.rentInner}>
                    <div className={styles.rentBlock}>
                        <div className={styles.billingInfo}>
                            <StepBlock title={'Billing Info'} hint={'Please enter your billing info'} step={'Step 1 of 4'} />
                            <div className={styles.fields}>
                                <div className={styles.fieldItem}>
                                    <h2 className={styles.fieldName}>Name</h2>
                                    <MyInput color={'gray'} placeholder='Your name' type={'text'}/>
                                </div>
                                <div className={styles.fieldItem}>
                                    <h2 className={styles.fieldName}>Phone Number</h2>
                                    <MyInput color={'gray'} placeholder='Phone number' type={'text'}/>
                                </div>
                                <div className={styles.fieldItem}>
                                    <h2 className={styles.fieldName}>Address</h2>
                                    <MyInput color={'gray'} placeholder='Address' type={'text'}/>
                                </div>
                                <div className={styles.fieldItem}>
                                    <h2 className={styles.fieldName}>Town/City</h2>
                                    <MyInput color={'gray'} placeholder='Town or city' type={'text'}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rentalInfo}>
                            <StepBlock title={'Rental Info'} hint={'Please select your rental date'} step={'Step 2 of 4'} />
                            <div className={styles.action}>
                                <div className={styles.radio}>
                                    <Image src={mark} alt={''} />
                                    Pick-Up
                                </div>
                                <div className={styles.fields}>
                                    <div className={styles.fieldItem}>
                                        <h2 className={styles.fieldName}>Locations</h2>
                                        <GraySelect options={['Moscow', 'London', 'New York']} />
                                    </div>
                                    <div className={styles.fieldItem}>
                                        <h2 className={styles.fieldName}>Date</h2>
                                        <MyInput color={'gray'} placeholder='Select your date' type={'date'}/>
                                    </div>
                                    <div className={styles.fieldItem}>
                                        <h2 className={styles.fieldName}>Time</h2>
                                        <MyInput color={'gray'} placeholder='Select your time' type={'time'}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.action}>
                                <div className={styles.radio}>
                                    <Image src={mark} alt={''}/>
                                    Drop-Off
                                </div>
                                <div className={styles.fields}>
                                    <div className={styles.fieldItem}>
                                        <h2 className={styles.fieldName}>Locations</h2>
                                        <GraySelect options={['Moscow', 'London', 'New York']}/>
                                    </div>
                                    <div className={styles.fieldItem}>
                                        <h2 className={styles.fieldName}>Date</h2>
                                        <MyInput color={'gray'} placeholder='Select your date' type={'date'}/>
                                    </div>
                                    <div className={styles.fieldItem}>
                                        <h2 className={styles.fieldName}>Time</h2>
                                        <MyInput color={'gray'} placeholder='Select your time' type={'time'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Payment />
                        <div className={styles.confirm}>
                            <StepBlock
                                title={'Confirmation'}
                                hint={'We are getting to the end. Just few clicks and your rental is ready!'}
                                step={'Step 4 of 4'}
                            />
                            <div className={styles.agree}>
                                <div className={styles.agreeItem}>
                                    <input type="checkbox"/>
                                    <span>I agree with sending an Marketing and newsletter emails. No spam, promised!</span>
                                </div>
                                <div className={styles.agreeItem}>
                                    <input type="checkbox"/>
                                    <span>I agree with our terms and conditions and privacy policy.</span>
                                </div>

                            </div>
                            <RentButton color={'blue'} children={'Rent Now'}/>
                            <div className={styles.safe}>
                                <Image src={security} alt={'security'}/>
                                <h2 className={styles.safeTitle}>All your data are safe</h2>
                                <span className={styles.safeInfo}>
                                    We are using the most advanced security to provide you the best experience ever.
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className={styles.total}>
                        <div className={styles.totalTitle}>
                            <h1 className={styles.title}>Rental Summary</h1>
                            <span className={styles.info}>
                                Prices may change depending on the length of the rental and the price of your rental car.
                            </span>
                        </div>
                        <div className={styles.carInfo}>
                            <Image src={car} alt={'car'} />
                            <div>
                                <h1 className={styles.carName}>Nissan GT-R</h1>
                                <div className={styles.reviews}>
                                    <div className={styles.stars}>
                                        <Image src={ActiveStar} alt='star'/>
                                        <Image src={ActiveStar} alt='star'/>
                                        <Image src={ActiveStar} alt='star'/>
                                        <Image src={ActiveStar} alt='star'/>
                                        <Image src={Star} alt='star'/>
                                    </div>
                                    <span className={styles.count}>
                                        440+ Reviewer
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.priceBlock}>
                            <div className={styles.priceItem}>
                                <span className={styles.priceName}>
                                    Subtotal
                                </span>
                                <span className={styles.priceValue}>
                                    $80.00
                                </span>
                            </div>
                            <div className={styles.priceItem}>
                                <span className={styles.priceName}>
                                    Tax
                                </span>
                                <span className={styles.priceValue}>
                                    $0
                                </span>
                            </div>
                        </div>

                        <div className={styles.promoCode}>
                            <MyInput type={'text'} color={'gray'} placeholder='Apply promo code'/>
                            <button className={styles.applyBtn}>Apply now</button>
                        </div>

                        <div className={styles.totalPrice}>
                            <div className={styles.priceAbout}>
                                <h2 className={styles.title}>
                                    Total Rental Price
                                </h2>
                                <span className={styles.info}>
                                    Overall price and includes rental discount
                                </span>
                            </div>
                            <h1>$80.00</h1>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;