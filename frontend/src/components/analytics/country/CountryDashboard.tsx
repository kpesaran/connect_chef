import { useEffect, useState } from 'react';

import CountryChartsStats from './CountryChartsStats';
import { fetchPostsData } from '../utils';
import type {Post} from '../../../interfaces'


export default function CountryDashboard():JSX.Element {
  const [posts, setPosts] = useState<Post[]|[]>([]);


  
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
