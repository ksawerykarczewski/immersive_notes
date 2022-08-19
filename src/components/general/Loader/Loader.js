import { motion } from 'framer-motion';
import React from 'react';

import styles from './Loader.module.scss';

const LoadingDot1 = {
    display: 'block',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#CBFF0E',
    boxShadow: '0.5rem 0.5rem 0px 0.1rem #000000'
};

const LoadingDot2 = {
    display: 'block',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#E123E2',
    boxShadow: '0.5rem 0.5rem 0px 0.1rem #000000'
};

const LoadingDot3 = {
    display: 'block',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#1F1DEF',
    boxShadow: '0.5rem 0.5rem 0px 0.1rem #000000'
};

const LoadingDot4 = {
    display: 'block',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#3EF9F9',
    boxShadow: '0.5rem 0.5rem 0px 0.1rem #000000'
};

const LoadingDot5 = {
    display: 'block',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#F9F93F',
    boxShadow: '0.5rem 0.5rem 0px 0.1rem #000000'
};

const LoadingContainer = {
    height: '10rem',
    display: 'flex',
    justifyContent: 'space-around',
    gap: '2rem'
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const DotVariants = {
    initial: {
        y: '0%'
    },
    animate: {
        y: 50
    }
};

const DotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
};

export default function Loader() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <motion.div style={LoadingContainer} variants={ContainerVariants} initial="initial" animate="animate">
                <motion.span style={LoadingDot1} variants={DotVariants} transition={DotTransition} />
                <motion.span style={LoadingDot2} variants={DotVariants} transition={DotTransition} />
                <motion.span style={LoadingDot3} variants={DotVariants} transition={DotTransition} />
                <motion.span style={LoadingDot4} variants={DotVariants} transition={DotTransition} />
                <motion.span style={LoadingDot5} variants={DotVariants} transition={DotTransition} />
            </motion.div>
        </div>
    );
}
