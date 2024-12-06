"use client"
import React, {FC, useEffect, useState} from 'react';
import styles from './Cars.module.scss'
import {CarsTypes} from "@/types/Cars.types";
import axios from "axios";
import Car from "@/components/car/Car";
import {CarType} from "@/types/Car.types";
import Link from "next/link";


const Cars:FC<CarsTypes> = ({titles, start, end, type, capacity, price}) => {

    const [cars, setCars] = useState<CarType[]>([])

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const {data} = await axios.get<CarType[]>('http://localhost:3001/cars');

                // Запрос к серверу
                setCars(data);
            } catch (err) {
                console.log(err)
            }
        }

        fetchCars();
    }, [])
    console.log(cars)
    return (
        <div className={styles.carsBlock}>
            <div className={styles.info}>
                <h1 className={styles.carsTitle}>{titles ? titles[0]: null}</h1>
                <Link className={styles.viewAll} href={'/category'}>View All</Link>
            </div>
            <div className={styles.popCars}>
                {
                    cars.length ?
                        cars.slice(0, start).map((car) => {
                            return (
                                <Car
                                    key={car.id}
                                    id={car.id}
                                    name={car.name}
                                    type={car.type}
                                    volume={car.volume}
                                    manual={car.manual}
                                    count={car.count}
                                    price={car.price}
                                    image={car.image}
                                />
                            )
                        }) : null
                }
            </div>
            <h1 className={styles.carsTitle}>{titles ? titles[1]: null}</h1>
            <div className={styles.recCars}>
                {
                    cars.length ?
                        cars.slice(start * end).map((car) => {
                            return (
                                <Car
                                    key={car.id}
                                    id={car.id}
                                    name={car.name}
                                    type={car.type}
                                    volume={car.volume}
                                    manual={car.manual}
                                    count={car.count}
                                    price={car.price}
                                    image={car.image}
                                />
                            )
                        }) : null
                }
            </div>

            <div className={styles.btnBlock}>
                <span className={styles.btnBlockItem}>Page 1</span>
                <Link href="/category">
                    <button className={styles.showMore}>Show more car</button>
                </Link>
                <span className={styles.btnBlockItem}>120 cars</span>
            </div>

        </div>
    );
};

export default Cars;