// pages/article/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export default function Article({ article }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <nav>
        <Link href="/" legacyBehavior>
          <a style={{ color: 'white', backgroundColor: 'black', padding: '10px 20px', textDecoration: 'none' }}>Back to Home</a>
        </Link>
      </nav>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto' }} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}

// Fetch the article data
export async function getServerSideProps(context) {
  const { id } = context.params;
  const apiKey = "Your API KEY";

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const article = response.data.articles[id];

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        article: {},
      },
    };
  }
}
2
