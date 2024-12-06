"use client"
import React, {useState} from 'react';
import styles from './FilterBar.module.scss'
import {Checkbox, FormControlLabel, Input, Slider} from "@mui/material";


const FilterBar = () => {
    const [value, setValue] = React.useState(40);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    return (
        <div className={styles.filterBar}>
            <div className={styles.category}>
                <span className={styles.catTitle}>TYPE</span>
                <div className={styles.catBoxes}>
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="Sport (10)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="SUV (12)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="MPV (16)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="Sedan (20)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="Coupe (14)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="Hatchback (14)" />

                </div>
            </div>
            <div className={styles.category}>
                <span className={styles.catTitle}>CAPACITY</span>
                <div className={styles.catBoxes}>
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="2 Person (10)" />
                    <FormControlLabel control={<Checkbox size={"small"} />} label="4 Person (14)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="6 Person (12)" />
                    <FormControlLabel control={<Checkbox size={"small"}/>} label="8 or More (16)" />

                </div>
            </div>
            <div className={styles.category}>
                <span className={styles.catTitle}>PRICE</span>
                <div className={styles.row}>
                    <div className={styles.minMax}>
                        <span>Min 0</span>
                        <span>Max $100.00</span>
                    </div>
                    <Slider
                        value={value}
                        className={styles.slider}
                        aria-label="Temperature"
                        defaultValue={40}
                        valueLabelDisplay="auto"
                        step={1}
                        onChange={handleSliderChange}

                        min={0}
                        max={100}
                        sx={{
                            height: 7, // Толщина линии трека
                            "& .MuiSlider-thumb": {
                                width: 20, // Ширина ползунка
                                height: 20, // Высота ползунка
                            },
                            "& .MuiSlider-track": {
                                height: 7, // Толщина активного трека
                            },
                            "& .MuiSlider-rail": {
                                height: 5, // Толщина неактивного трека
                            },
                            "& .MuiSlider-mark": {
                                height: 12, // Высота отметок
                                width: 4, // Ширина отметок
                            },
                        }}
                    />
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default FilterBar;