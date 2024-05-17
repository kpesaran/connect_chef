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
      <h3>Country Data Overview</h3>
      <CountryChartsStats posts={posts} />
    </div>
  );
}
