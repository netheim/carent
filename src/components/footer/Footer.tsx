import React from 'react';
import styles from './Footer.module.scss'
import Container from "@/components/container/Container";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.footerInner}>
                    <div className={styles.firstFooter}>
                        <div className={styles.title}>
                            <h1 className={styles.logo}>MORENT</h1>
                            <p className={styles.subTitle}>
                                Our vision is to provide convenience and help increase your sales business.
                            </p>
                        </div>
                        <div className={styles.navbar}>
                            <div className={styles.navItem}>
                                <h1 className={styles.navTitle}>About</h1>
                                <div className={styles.navLinks}>
                                    <Link className={styles.navLink} href={'#'}>How it works</Link>
                                    <Link className={styles.navLink} href={'#'}>Featured</Link>
                                    <Link className={styles.navLink} href={'#'}>Partnership</Link>
                                    <Link className={styles.navLink} href={'#'}>Business Relation</Link>
                                </div>
                            </div>
                            <div className={styles.navItem}>
                                <h1 className={styles.navTitle}>Community</h1>
                                <div className={styles.navLinks}>
                                    <Link className={styles.navLink} href={'#'}>Events</Link>
                                    <Link className={styles.navLink} href={'#'}>Blog</Link>
                                    <Link className={styles.navLink} href={'#'}>Podcast</Link>
                                    <Link className={styles.navLink} href={'#'}>Invite a friend</Link>
                                </div>
                            </div>
                            <div className={styles.navItem}>
                                <h1 className={styles.navTitle}>Socials</h1>
                                <div className={styles.navLinks}>
                                    <Link className={styles.navLink} href={'#'}>Discord</Link>
                                    <Link className={styles.navLink} href={'#'}>Instagram</Link>
                                    <Link className={styles.navLink} href={'#'}>Twitter</Link>
                                    <Link className={styles.navLink} href={'#'}>Facebook</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.secondFooter}>
                        <h1 className={styles.copyright}>
                            ©2022 MORENT. All rights reserved
                        </h1>
                        <div className={styles.private}>
                            <Link className={styles.privateLink} href='#'>
                                Privacy & Policy
                            </Link>
                            <Link className={styles.privateLink} href='#'>
                                Terms & Condition
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;