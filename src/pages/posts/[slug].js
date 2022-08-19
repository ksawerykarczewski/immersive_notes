import { createClient } from 'contentful';

import Image from 'next/image';
import Section from '../../components/general/Section/Section';

import styles from './slug.module.scss';
import NextPost from '../../components/general/NextPost/NextPost';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'blogPost' });

    const paths = response.items.map((item) => {
        return {
            params: {
                slug: item.fields.slug
            }
        };
    });

    return {
        paths: paths,
        fallback: false
    };
};

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({ content_type: 'blogPost', 'fields.slug': params.slug });
    const response = await client.getEntries({ content_type: 'blogPost' });

    return {
        props: {
            blogPost: items[0],
            posts: response.items
        }
    };
}

export default function PostDetails({ blogPost, posts }) {
    const { title, thumbnail, topics, author, text, slug } = blogPost.fields;
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Section>
                    <div className={styles.heading}>
                        <h2 className={styles.heading}>{title}</h2>
                        <div className={styles.thumbnail}>
                            <Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} />
                        </div>
                        <div className={styles.wrapper}>
                            <ul className={styles.list}>
                                {topics.map((topic, index) => {
                                    return (
                                        <li key={index} className={styles.item}>
                                            {topic}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={styles.authorContainer}>
                                <span className={styles.author}>{author}</span>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className={styles.content}>
                        {text.content.map((item, index) => {
                            if (item.nodeType === 'embedded-asset-block') {
                                return (
                                    <div key={index} className={styles.image}>
                                        <Image
                                            src={`https:${item.data.target.fields.file.url}`}
                                            width={item.data.target.fields.file.details.image.width}
                                            height={item.data.target.fields.file.details.image.height}
                                        />
                                    </div>
                                );
                            } else if (item.nodeType === 'paragraph') {
                                return (
                                    <p key={index} className={styles.paragraph}>
                                        {item.content[0].value}
                                    </p>
                                );
                            } else if (item.nodeType === 'heading-4') {
                                return (
                                    <p key={index} className={styles.subheading}>
                                        {item.content[0].value}
                                    </p>
                                );
                            }
                        })}
                    </div>
                </Section>
            </div>
            {posts.map((post, index) => {
                if (blogPost.sys.id === post.sys.id && posts.length !== index + 1) {
                    let title = posts[++index].fields.title;
                    return (
                        <div key={index}>
                            <NextPost copy={'Next'} href={`/posts/${posts[index].fields.slug}`} title={title} isForward />
                        </div>
                    );
                } else if (blogPost.sys.id === post.sys.id && posts.length === index + 1) {
                    let title = posts[--index].fields.title;
                    return (
                        <div key={index}>
                            <NextPost copy={'Previous'} href={`/posts/${posts[index].fields.slug}`} title={title} isForward={false} />
                        </div>
                    );
                }
            })}
        </div>
    );
}
