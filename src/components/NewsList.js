// components/NewsList.js
import styles from '../styles/NewsList.module.css';
import Link from 'next/link';
import Image from 'next/image';

<Image src="/image-url" alt="description" width={500} height={300} />

export default function NewsList({ articles }) {
  return (
    <div className={styles.newsContainer}>
      {articles.map((article, index) => (
        <div key={index} className={styles.newsItem}>
          <Link href={`/article/${index}`} legacyBehavior>
            <a>
              <h2>{article.title}</h2>
              <img src={article.urlToImage} alt={article.title} />
              <p>{article.description}</p>
            </a>
          </Link>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}
