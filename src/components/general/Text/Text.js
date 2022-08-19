import styles from './Text.module.scss';
import classNames from 'classnames';

function Text({ children, type }) {
    if (type === 'paragraph') {
        return <p className={styles.paragraph}>{children}</p>;
    } else if (type === 'richtext') {
        return <div className={classNames(styles.text, styles.richtext)} dangerouslySetInnerHTML={{ __html: children }} />;
    }
}

export default Text;
