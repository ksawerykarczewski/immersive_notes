import styles from './Link.module.scss';

function Link({ children, href }) {
    return (
        <a className={styles.link} href={href}>
            {children}
        </a>
    );
}

export default Link;
