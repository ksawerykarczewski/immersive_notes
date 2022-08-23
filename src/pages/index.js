import React from 'react';
import Link from 'next/link';
import { createClient } from 'contentful';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames';

import BlogPostsList from '../components/blog/blog-posts-list/BlogPostsList';
import Heading from '../components/general/Heading/Heading';
import Header from '../components/general/Header/Header';
import Text from '../components/general/Text/Text';
import Section from '../components/general/Section/Section';
import ScrollIcon from '../components/general/ScrollIcon/ScrollIcon';
import styles from './index.module.scss';

import data from '../data/home.json';
import { motion } from 'framer-motion';
import { reveal } from '../utils/animations';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });
    const response = await client.getEntries({ content_type: 'blogPost' });
    return {
        props: {
            posts: response.items
        }
    };
}

const numberOfHeadings = 10;

export default function Home({ posts }) {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header firstline={data.heading[0]} secondline={data.heading[1]} copy={data.copy} />
                </div>
            </div>
                <img className={styles.canvas} src="/assets/gifs/squares.gif" alt="canvas" width="100%" height="100%" />
            <Section>
                <div className={styles.container}>
                    <div className={styles.highlight}>
                        <Heading tag="h2">{data.headingAbout}</Heading>
                        <ScrollIcon src="/assets/svg/arrow-down.svg" alt="arrow down" />
                    </div>
                    <motion.div className={styles.about}>
                        {data.aboutCopy.map((paragraph, index) => {
                            return (
                                <Text key={index} type="paragraph">
                                    {paragraph}
                                </Text>
                            );
                        })}
                    </motion.div>
                </div>
            </Section>
            <Section>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContainer}>
                        <Marquee className={styles.marquee} gradientColor={[203, 255, 14]} gradientWidth={0} speed={55}>
                            <Heading tag="h2">
                                {[...Array(numberOfHeadings)].map((_, index) => (
                                    <span className={styles.marqueeText} key={index}>
                                        {data.headingPosts}
                                    </span>
                                ))}
                            </Heading>
                        </Marquee>
                    </div>
                    <div className={styles.marqueeContainer}>
                        <Marquee className={styles.marquee} gradientColor={[203, 255, 14]} gradientWidth={0} direction={'right'} speed={55}>
                            <Heading tag="h2">
                                {[...Array(numberOfHeadings)].map((_, index) => (
                                    <span className={styles.marqueeText} key={index}>
                                        {data.headingPosts}
                                    </span>
                                ))}
                            </Heading>
                        </Marquee>
                    </div>
                </div>
            </Section>
            <Section>
                <div className={styles.container}>
                    <BlogPostsList posts={posts} />
                    {posts.length === 3 ? (
                        <div className={classNames(styles.posts, 'inactive')}>
                            <span>{data.postsCta[1]}</span>
                        </div>
                    ) : (
                        <Link href={`/blog`}>
                            <div className={styles.posts}>
                                <a className={styles.postsLink}>{data.postsCta[0]}</a>
                            </div>
                        </Link>
                    )}
                </div>
            </Section>
        </div>
    );
}
