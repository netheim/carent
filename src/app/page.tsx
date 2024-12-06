import React from 'react'
import styles from './page.module.scss'
import Container from "@/components/container/Container";
import RentButton from "@/components/UI/rentButton/RentButton";
import Image from "next/image";
import IntroLeftCar from '@/../public/img/BG.png'
import IntroRightCar from '@/../public/img/BG2.png'
import FilterBlock from "@/components/filterBlock/FilterBlock";
import Cars from "@/components/cars/Cars";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.main}>
          <Container>
              <div className={styles.mainInner}>
                  <div className={styles.intro}>
                      <div className={styles.introLeft}>
                          <div className={styles.introAbout}>
                              <h1 className={styles.introTitle}>
                                  The Best Platform for Car Rental
                              </h1>
                              <p className={styles.introDescription}>
                                  Easy of doing a car rental safely and reliably.
                                  Of Course at a low price.
                              </p>
                              <Link href={'/category'} style={{zIndex: '4'}}><RentButton children={'Rental Car'} color={'blue'}/></Link>
                          </div>
                          <div className={styles.introImage}>
                              <Image src={IntroLeftCar} alt='car' />
                          </div>
                      </div>
                      <div className={styles.introRight}>
                          <div className={styles.introAbout}>
                              <h1 className={styles.introTitle}>
                                  Easy way to rent a car at a low price
                              </h1>
                              <p className={styles.introDescription}>
                                  Providing cheap car rental services and safe and comfortable facilities.
                              </p>
                              <Link href={'/category'} style={{zIndex: '4'}}><RentButton children={'Rental Car'} color={'ice'}/></Link>
                          </div>

                          <div className={styles.introImage}>
                              <Image src={IntroRightCar} alt='car'/>
                          </div>
                      </div>
                  </div>

                  <FilterBlock />
                  <Cars titles={['Popular Cars', 'Recommendation Cars']} start={4} end={1}/>

              </div>
          </Container>
      </div>
  );
}
