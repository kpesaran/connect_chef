import { fetchPostsData } from '../utils';
import { useEffect, useState } from 'react';
import GlobalChartsStats from './GlobalChartsStats';

export default function GlobalDashboard() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true)

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
      setLoading(false)
  }, []);

  return (
    <div>
          <h3>Global Data Overview</h3>
          
      <GlobalChartsStats posts = {posts} isLoading ={isLoading} />
    </div>
  );
}
