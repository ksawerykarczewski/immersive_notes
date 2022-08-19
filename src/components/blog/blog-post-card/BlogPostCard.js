import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogPostCard.module.scss';

export default function BlogPostCard({ post, identifier }) {
    const { title, thumbnail, slug, author } = post.fields;
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Link href={`/posts/${slug}`}>
                    <a className={styles.link}>
                        <>
                            <div className={styles.wrapper}>
                                <span className={styles.author}>{author}</span>
                            </div>
                            <div className={styles.image}>
                                <Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} />
                            </div>
                            <span className={styles.title}>{title}</span>
                        </>
                    </a>
                </Link>
            </div>
        </div>
    );
}
