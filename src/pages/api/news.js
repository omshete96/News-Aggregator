import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY; // Access from .env.local
  const country = req.query.country || 'us';

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
    const articles = response.data.articles;

    res.status(200).json({ articles });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
