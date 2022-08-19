import Header from '../components/general/Header/Header';
import styles from './blog.module.scss';
import BlogPostsList from '../components/blog/blog-posts-list/BlogPostsList';
import { createClient } from 'contentful';
import Section from '../components/general/Section/Section';
import data from '../data/blog.json';

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

export default function Blog({ posts }) {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Header firstline={data.heading[0]} secondline={data.heading[1]} copy={data.copy} />
                <Section>
                    <div className={styles.posts}>
                        <BlogPostsList posts={posts} />
                    </div>
                </Section>
            </div>
        </div>
    );
}
