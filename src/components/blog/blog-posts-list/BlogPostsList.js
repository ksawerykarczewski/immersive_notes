import { useRouter } from 'next/router';
import BlogPostCard from '../blog-post-card/BlogPostCard';
import styles from './BlogPostsList.module.scss';

export default function BlogPostsList({ posts }) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* limit posts to 3 on home page */}
            {router.asPath === '/'
                ? posts
                      .filter((post, id) => id < 3)
                      .map((post) => {
                          return <BlogPostCard key={post.sys.id} identifier={post.sys.id} post={post} />;
                      })
                : posts.map((post) => {
                      return <BlogPostCard key={post.sys.id} identifier={post.sys.id} post={post} />;
                  })}
        </div>
    );
}
