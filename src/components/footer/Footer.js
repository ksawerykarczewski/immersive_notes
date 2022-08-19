import { useRef, useState } from 'react';
import styles from './Footer.module.scss';
import Heading from '../general/Heading/Heading';
import Text from '../general/Text/Text';
import Link from 'next/link';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import data from '../../data/footer.json';

export default function Footer() {
    const noteRef = useRef();
    const [noteDisplay, setNoteDisplay] = useState(false);

    const modal = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
        exit: { opacity: 0, y: 5 }
    };

    const onClick = () => {
        setNoteDisplay(!noteDisplay);
    };

    return (
        <footer className={styles.footer}>
            <Heading tag="h4" classname="footerHeading">
                <span className={styles.heading} data-replace="hello!">
                    <span className={styles.replace}>{data.heading}</span>
                </span>
            </Heading>
            <div className={styles.social}>
                {data.social.map((item, index) => {
                    return (
                        <a key={index} className={styles.link} href={item.link} target="_blank">
                            {item.name}
                        </a>
                    );
                })}
            </div>
            <a className={classNames(styles.link, styles.mail)} href="mailto:someone@yoursite.com?subject=Immersive Mail">
                {data.mail}
            </a>
            <div className={styles.copy}>
                <button className={classNames(styles.button, 'button')} onClick={onClick}>
                    {data.note}
                </button>
                <Text type="paragraph">{data.copyright}</Text>
            </div>
            <AnimatePresence exitBeforeEnter>
                {noteDisplay && (
                    <motion.div className={classNames(styles.note)} ref={noteRef} variants={modal} initial="hidden" animate="visible" exit="exit" transition={{ type: 'easeOut' }}>
                        <button className={classNames(styles.button, styles.close, 'button')} onClick={onClick}>
                            <img src="/assets/svg/close.svg" width="100%" height="100%" alt="close icon" />
                        </button>
                        <Heading tag="h4" classname="noteHeading">
                            {data.note}
                        </Heading>
                        <span className={styles.noteText}>{data.noteCopy}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
