"use client"
import React, {useEffect, useState} from 'react';
import styles from './Favorites.module.scss'
import useGlobalState from "@/app/store/favoriteState";
import {CarType} from "@/types/Car.types";
import axios from "axios";
import Car from "@/components/car/Car";
import Container from "@/components/container/Container";
import Image from "next/image";
import emptyIcon from '@/../public/img/file.png'

const Page = () => {

    const { ids } = useGlobalState();
    const [cars, setCars] = useState<CarType[]>([])

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const {data} = await axios.get<CarType[]>('http://localhost:3001/cars');

                // Запрос к серверу

                setCars(data.filter(item => ids.includes(String(item.id))));
            } catch (err) {
                console.log(err)
            }
        }

        fetchCars();
    }, [ids])
    console.log(cars)
    return (
        <div className={styles.favorites}>
            <Container>
                <div className={styles.cars}>
                    {cars.length ? <h1>Favorite cars</h1>: null}
                    <div className={styles.carsBlock}>
                        {
                            cars.length ?
                                cars.map((car) => {
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
                                })
                                :
                                <div className={styles.emptyBlock}>
                                    <Image src={emptyIcon} alt={'empty'} width={100} height={100}/>
                                    <h2>Not Found</h2>
                                </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;