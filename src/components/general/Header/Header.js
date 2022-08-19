import Text from '../Text/Text';
import AnimatedHeading from '../AnimatedHeading/AnimatedHeading';
import styles from './Header.module.scss';

function Header({ firstline, secondline, copy }) {
    return (
        <div className={styles.container}>
            <AnimatedHeading firstline={firstline} secondline={secondline} />
            <Text type="paragraph">{copy}</Text>
        </div>
    );
}

export default Header;
