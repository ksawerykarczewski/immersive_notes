import Text from '../Text/Text';
import AnimatedHeading from '../AnimatedHeading/AnimatedHeading';
import Section from '../Section/Section';
import styles from './Header.module.scss';

function Header({ firstline, secondline, copy }) {
    return (
        <div className={styles.container}>
            <AnimatedHeading firstline={firstline} secondline={secondline} />
            <Section>
                <Text type="paragraph">{copy}</Text>
            </Section>
        </div>
    );
}

export default Header;
