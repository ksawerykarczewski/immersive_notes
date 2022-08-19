import ActiveLink from '../general/ActiveLink/ActiveLink';
import styles from './Navbar.module.scss';
import classNames from 'classnames';

export default function Navbar() {
    return (
        <div className={classNames(styles.isInverted, styles.container)}>
            <nav className={styles.navigation}>
                <ActiveLink href="/">Home</ActiveLink>
                <ActiveLink href="/blog/">Notes</ActiveLink>
                <ActiveLink href="/bio/">Bio</ActiveLink>
            </nav>
        </div>
    );
}
