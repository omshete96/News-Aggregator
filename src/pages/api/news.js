import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const country = req.query.country || 'us';  // Default country to 'us'

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
    const articles = response.data.articles;

    res.status(200).json({ articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
