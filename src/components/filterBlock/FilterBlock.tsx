
"use client"

import React, { useState } from "react";
import styles from './FilterBlock.module.scss'
import swap from '@/../public/icons/Swap.svg'
import Image from "next/image";

const FilterBlock = () => {
    const [selectedOption, setSelectedOption] = useState("pick-up");
    const [pickUpData, setPickUpData] = useState({ location: "", date: "", time: "" });
    const [dropOffData, setDropOffData] = useState({ location: "", date: "", time: "" });

    const handleSwap = () => {
        setPickUpData((prev) => ({ ...dropOffData }));
        setDropOffData((prev) => ({ ...pickUpData }));
    };



    return (
        <div className={styles.filterBlock}>
            <div className={selectedOption === "pick-up" ? [styles.filter, styles.active].join(' ') : styles.filter}>
                <label>
                    <input
                        type="radio"
                        name="selection"
                        value="pick-up"
                        checked={selectedOption === "pick-up"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Pick-Up
                </label>
                <div className={styles.fields}>
                    <div className={styles.field}>
                        <h1  className={styles.fieldsTitle}>Locations</h1>
                        <select
                            style={{marginLeft: "-5px"}}
                            className={styles.fieldSelect}
                            value={pickUpData.location}
                            onChange={(e) =>
                                setPickUpData((prev) => ({...prev, location: e.target.value}))
                            }
                        >
                            <option value="">Select your city</option>
                            <option value="City1">London</option>
                            <option value="City2">Moscow</option>
                            <option value="City3">New York</option>
                            <option value="City4">Roma</option>
                            <option value="City5">Munich</option>
                            <option value="City6">Madrid</option>
                            <option value="City7">Paris</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <h1 className={styles.fieldsTitle}>Date</h1>
                        <input
                            className={styles.fieldSelect}
                            type="date"
                            value={pickUpData.date}
                            onChange={(e) =>
                                setPickUpData((prev) => ({...prev, date: e.target.value}))
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <h1 className={styles.fieldsTitle}>Time</h1>
                        <input
                            className={styles.fieldSelect}
                            type="time"
                            value={pickUpData.time}
                            onChange={(e) =>
                                setPickUpData((prev) => ({...prev, time: e.target.value}))
                            }
                        />
                    </div>
                </div>
            </div>
            <button className={styles.swapButton} onClick={handleSwap}>
                <Image src={swap} alt='swap' />
            </button>
            <div className={selectedOption === "drop-off" ? [styles.filter, styles.active].join(' ') : styles.filter}>
                <label>
                    <input

                        type="radio"
                        name="selection"
                        value="drop-off"
                        checked={selectedOption === "drop-off"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Drop-Off
                </label>
                <div className={styles.fields}>
                    <div className={styles.field}>
                        <h1 className={styles.fieldsTitle}>Locations</h1>
                        <select
                            style={{marginLeft: "-5px"}}
                            className={styles.fieldSelect}
                            value={dropOffData.location}
                            onChange={(e) =>
                                setDropOffData((prev) => ({...prev, location: e.target.value}))
                            }
                        >
                            <option value="">Select your city</option>
                            <option value="City1">London</option>
                            <option value="City2">Moscow</option>
                            <option value="City3">New York</option>
                            <option value="City4">Roma</option>
                            <option value="City5">Munich</option>
                            <option value="City6">Madrid</option>
                            <option value="City7">Paris</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <h1 className={styles.fieldsTitle}>Date</h1>
                        <input
                            className={styles.fieldSelect}
                            type="date"
                            value={dropOffData.date}
                            onChange={(e) =>
                                setDropOffData((prev) => ({...prev, date: e.target.value}))
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <h1 className={styles.fieldsTitle}>Time</h1>
                        <input
                            className={styles.fieldSelect}
                            type="time"
                            value={dropOffData.time}
                            onChange={(e) =>
                                setDropOffData((prev) => ({...prev, time: e.target.value}))
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBlock;