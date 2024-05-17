import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCharts from './CountryCharts';

const fetchPostsData = async () => {
  try {
    const endpoint = `http://localhost:3001/api/v1/postings?`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (err) {
    throw new Error('failed to fetch posts');
  }
};

export default function CountryDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPostsData();
        setPosts(fetchedPosts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Country Data Overview</h3>
      <CountryCharts posts={posts} />
    </div>
  );
}
