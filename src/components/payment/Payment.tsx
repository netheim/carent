"use client"
import React, { useState } from 'react';
import styles from './Payment.module.scss';
import StepBlock from "@/components/stepBlock/StepBlock";

import visa from '@/../public/img/Visa.png'
import paypal from '@/../public/img/PayPal.png'
import bitcoin from '@/../public/img/Bitcoin.png'
import Image from "next/image";
import MyInput from "@/components/UI/myInput/MyInput";

const Payment: React.FC = () => {
    // Состояние для выбранного метода оплаты
    const [selectedMethod, setSelectedMethod] = useState<'creditCard' | 'paypal' | 'bitcoin'>('creditCard');

    return (
        <div className={styles.payment}>
            <StepBlock title={'Payment Method'} hint={'Please enter your payment method'} step={'Step 3 of 4'} />

            <div className={styles.methods}>
                <div className={`${styles.method} ${selectedMethod === "creditCard" ? styles.active : ""}`}>
                    <div className={styles.methodTitle}>
                        <div className={styles.methodTitle}>
                            <input
                                type="radio"
                                name="payment"
                                value="creditCard"
                                checked={selectedMethod === "creditCard"}
                                onChange={() => setSelectedMethod("creditCard")}
                            />
                            <h1 className={styles.methodName}>Credit Card</h1>
                        </div>
                        <Image src={visa} alt={'visa'} />
                    </div>
                    <div className={`${styles.methodInner} ${selectedMethod === "creditCard" ? styles.active : ""}`}>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Card Number</h2>
                            <MyInput color={'white'} placeholder='Card number' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Expiration Date</h2>
                            <MyInput color={'white'} placeholder='Date' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Card Holder</h2>
                            <MyInput color={'white'} placeholder='Card holder' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>CVC</h2>
                            <MyInput color={'white'} placeholder='CVC' type={'text'}/>
                        </div>
                    </div>


                </div>
                <div className={`${styles.method} ${selectedMethod === "paypal" ? styles.active : ""}`}>
                    <div className={styles.methodTitle}>
                        <div className={styles.methodTitle}>
                            <input
                                type="radio"
                                name="payment"
                                value="paypal"
                                checked={selectedMethod === "paypal"}
                                onChange={() => setSelectedMethod("paypal")}
                            />
                            <h1 className={styles.methodName}>PayPal</h1>
                        </div>
                        <Image src={paypal} alt={'visa'}/>
                    </div>
                    <div className={`${styles.methodInner} ${selectedMethod === "paypal" ? styles.active : ""}`}>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Card Number</h2>
                            <MyInput color={'white'} placeholder='Card number' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Expiration Date</h2>
                            <MyInput color={'white'} placeholder='Date' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Card Holder</h2>
                            <MyInput color={'white'} placeholder='Card holder' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>CVC</h2>
                            <MyInput color={'white'} placeholder='CVC' type={'text'}/>
                        </div>
                    </div>


                </div>
                <div className={`${styles.method} ${selectedMethod === "bitcoin" ? styles.active : ""}`}>
                    <div className={styles.methodTitle}>
                        <div className={styles.methodTitle}>
                            <input
                                type="radio"
                                name="payment"
                                value="bitcoin"
                                checked={selectedMethod === "bitcoin"}
                                onChange={() => setSelectedMethod("bitcoin")}
                            />
                            <h1 className={styles.methodName}>Bitcoin</h1>
                        </div>
                        <Image src={bitcoin} alt={'visa'}/>
                    </div>
                    <div className={`${styles.methodInner} ${selectedMethod === "bitcoin" ? styles.active : ""}`}>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Card Number</h2>
                            <MyInput color={'white'} placeholder='Card number' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Expiration Date</h2>
                            <MyInput color={'white'} placeholder='Date' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>Card Holder</h2>
                            <MyInput color={'white'} placeholder='Card holder' type={'text'}/>
                        </div>
                        <div className={styles.fieldItem}>
                            <h2 className={styles.fieldName}>CVC</h2>
                            <MyInput color={'white'} placeholder='CVC' type={'text'}/>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Payment;