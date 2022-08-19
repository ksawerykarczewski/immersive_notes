import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedHeading.module.scss';

const AnimatedHeading = ({ firstline, secondline }) => {
    // splitting firstline into letters
    const lettersFirstline = Array.from(firstline);
    const lettersSecondline = Array.from(secondline);

    // Variants for Container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.025, delayChildren: 0.04 * i }
        })
    };

    // Variants for each letter
    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'easeInOut',
                damping: 100,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: 20,
            transition: {
                type: 'easeInOut',
                damping: 1,
                stiffness: 100
            }
        }
    };

    return (
        <h1 className={styles.heading}>
            <motion.div variants={container} initial="hidden" animate="visible">
                <div style={{ overflow: 'hidden', display: 'flex' }}>
                    {lettersFirstline.map((letter, index) => (
                        <motion.span variants={child} key={index}>
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </div>
                <div style={{ overflow: 'hidden', display: 'flex' }}>
                    {lettersSecondline.map((letter, index) => (
                        <motion.span variants={child} key={index}>
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </h1>
    );
};

export default AnimatedHeading;
