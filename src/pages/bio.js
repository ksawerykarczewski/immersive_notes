import Heading from '../components/general/Heading/Heading';
import Text from '../components/general/Text/Text';
import Header from '../components/general/Header/Header';
import ScrollIcon from '../components/general/ScrollIcon/ScrollIcon';
import styles from './bio.module.scss';
import data from '../data/bio.json';
import Section from '../components/general/Section/Section';
import classNames from 'classnames';

export default function Bio() {
    return (
        <div className={classNames(styles.container, styles.page)}>
            <Section>
                <Header firstline={data.heading[0]} secondline={data.heading[1]} copy={data.copy} />
                {data.aboutCopy.map((paragraph, index) => {
                    return (
                        <Text key={index} type="paragraph">
                            {paragraph}
                        </Text>
                    );
                })}
            </Section>
            <Text type="richtext">{data.linkText}</Text>
            <div className={styles.section}>
                <Section>
                    <Heading tag="h2" className={styles.sectionHeading}>
                        {data.trainees.heading}
                    </Heading>
                    <Text type="richtext">{data.trainees.copy}</Text>
                </Section>
                <Section>
                    <div className={styles.iconWrapper}>
                        <ScrollIcon src="/assets/svg/arrow-down.svg" alt="arrow down" />
                    </div>
                </Section>
                <Section>
                    {data.trainees.people.map((item, index) => {
                        return (
                            <div className={styles.block} key={index}>
                                <Heading tag="h5">{item.name}</Heading>
                                <img className={styles.image} src={item.img} alt={`picture of ${item.name}`} width="100%" height="100%" />
                                <Text type="paragraph">{item.copy}</Text>
                                <a href={item.link} className={styles.link} target="_blank">
                                    Link
                                </a>
                            </div>
                        );
                    })}
                </Section>
            </div>
        </div>
    );
}
