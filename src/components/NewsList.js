import styles from '../styles/NewsList.module.css';

export default function NewsList({ articles }) {
  return (
    <div className={styles.newsContainer}>
      {articles.map((article, index) => (
        <div key={index} className={styles.newsItem}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}
