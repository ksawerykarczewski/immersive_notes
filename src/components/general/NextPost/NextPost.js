//import Link from 'next/link';
import styles from './NextPost.module.scss';
import classNames from 'classnames';
import Link from '../Link/Link';

function NextPost({ copy, href, title, isForward }) {
    return (
        <Link href={href}>
            <div className={styles.container}>
                <span className={styles.copy}>{copy}</span>
                <div className={styles.title}>{title}</div>
                {isForward ? (
                    <div className={styles.wrapper}>
                        <img className={styles.icon} src="/assets/svg/next-big.svg" />
                        <img className={classNames(styles.icon, styles.over)} src="/assets/svg/next-big.svg" />
                    </div>
                ) : (
                    <div className={styles.wrapper}>
                        <img className={classNames(styles.icon, styles.back)} src="/assets/svg/next-big-back.svg" />
                        <img className={classNames(styles.icon, styles.back, styles.over)} src="/assets/svg/next-big-back.svg" />
                    </div>
                )}
            </div>
        </Link>
    );
}

export default NextPost;
