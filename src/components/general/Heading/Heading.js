import styles from './Heading.module.scss';
import classNames from 'classnames';

function Heading({ children, tag, classname }) {
    if (tag === 'h1') {
        return <h1 className={classNames(styles.heading, `is-${tag}`, classname ? classname : '')}>{children}</h1>;
    } else if (tag === 'h2') {
        return <h2 className={classNames(styles.heading, `is-${tag}`, classname ? classname : '')}>{children}</h2>;
    } else if (tag === 'h3') {
        return <h3 className={classNames(styles.heading, `is-${tag}`, classname ? classname : '')}>{children}</h3>;
    } else if (tag === 'h4') {
        return <h4 className={classNames(styles.heading, `is-${tag}`, classname ? classname : '')}>{children}</h4>;
    } else if (tag === 'h5') {
        return <h5 className={classNames(styles.heading, `is-${tag}`, classname ? classname : '')}>{children}</h5>;
    }
}

export default Heading;
