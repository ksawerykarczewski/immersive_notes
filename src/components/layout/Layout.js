import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Footer from '../footer/Footer';
import Loader from '../general/Loader/Loader';
import Navbar from '../navbar/Navbar';
import styles from './Layout.module.scss';

import classNames from 'classnames';

export default function Layout({ children }) {
    const router = useRouter();
    const [isInverted, setIsInverted] = useState(false);
    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(3);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((timer) => timer - 1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    useEffect(() => {
        if (router.asPath === '/bio/') {
            setIsInverted(true);
        } else {
            setIsInverted(false);
        }
    }, [router.asPath]);

    return (
        <>
            {preloader ? (
                <div className={styles.preloader}>
                    <Loader />
                </div>
            ) : (
                <div className={classNames(styles.layout, isInverted ? `is-inverted` : '')}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            )}
        </>
    );
}
