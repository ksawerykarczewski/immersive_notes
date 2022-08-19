import styles from './ScrollIcon.module.scss';
import { motion } from 'framer-motion';

function ScrollIcon({ src, alt }) {
    return (
        <motion.img
            className={styles.icon}
            src={src}
            alt={alt}
            animate={{ y: -20 }}
            transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        />
    );
}

export default ScrollIcon;
