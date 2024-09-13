import axios from 'axios';
import NewsList from '../components/NewsList';

export default function Home({ articles }) {
  return (
    <div>
      <h1>News Aggregator</h1>
      <NewsList articles={articles} />
    </div>
  );
}

// Fetch data from the API route during build time
export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/news?country=us');
    return {
      props: {
        articles: response.data.articles,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        articles: [],
      },
    };
  }
}
