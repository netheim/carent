import React from 'react';
import styles from './Header.module.scss'
import Container from "@/components/container/Container";
import Image from "next/image";
import searchIcon from '../../../public/icons/search-normal.svg'
import heartIcon from '../../../public/icons/heart.svg'
import notificationIcon from '../../../public/icons/notifications.svg'
import settingsIcon from '../../../public/icons/settings.svg'
import profileImg from '../../../public/icons/Image.jpg'
import FilterButton from "@/components/UI/filterButton/FilterButton";
import Link from "next/link";


const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerInner}>
                    <div className={styles.logoAndSearch}>
                        <Link className={styles.logo} href={'/'}>MORENT</Link>
                        <div className={styles.search}>
                            <div>
                                <Image src={searchIcon} alt='ico' width={24} height={24} />
                            </div>
                            <input className={styles.searchInput} type="text" placeholder="Search something here"/>
                            <FilterButton />
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <button className={styles.menuIcon}>
                            <Link className={styles.menuLink} href={'/favorites'}>
                                <Image src={heartIcon} alt='ico' />
                            </Link>
                        </button>
                        <button className={styles.menuIcon}>
                            <Link className={styles.menuLink} href={'/notifications'}>
                                <Image src={notificationIcon} alt='ico' />
                            </Link>

                        </button>
                        <button className={styles.menuIcon}>
                            <Link className={styles.menuLink} href={'/settings'}>
                                <Image src={settingsIcon} alt='ico' />
                            </Link>

                        </button>
                        <button className={styles.menuIcon}>
                            <Link className={styles.menuLink} href={'/profile'}>
                                <Image src={profileImg} alt='ico' color={'red'} />
                            </Link>

                        </button>

                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;