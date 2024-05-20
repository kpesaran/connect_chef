import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryChartsStats from './CountryChartsStats';
import { fetchPostsData } from '../utils';



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

      <CountryChartsStats posts={posts} />
    </div>
  );
}
