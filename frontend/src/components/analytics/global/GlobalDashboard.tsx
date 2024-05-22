import { fetchPostsData } from '../utils';
import { useEffect, useState } from 'react';
import GlobalChartsStats from './GlobalChartsStats';

export default function GlobalDashboard(): JSX.Element {
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
    <div className='dashboard-container'>
          <h3 className='text-2xl'>Global Data Overview</h3>
          
      <GlobalChartsStats posts = {posts} />
    </div>
  );
}
