import React, { useEffect, useState } from 'react';

import './styles.css';

import axios from 'axios';
import SearchFilterSortSidebar from '../searchFilterSort/SearchFilterSortSidebar';

import Post from './Post'



const PostContainer: React.FC = () => {
  
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  
  
  function handleFilterChange(newFilter) {
    setFilter(newFilter)
  }
  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `http://localhost:3001/api/v1/postings?`;
      

        const response = await axios.get(endpoint);
        console.log(response.data);
      
        if (searchTerm != "") {
          const searchTermLowerCase = searchTerm.toLowerCase()
          const postsToDisplay = response.data.filter(post => post.title && post.title.toLowerCase().includes(searchTermLowerCase));
          setPosts([...postsToDisplay])
          return

        }

        setPosts(response.data);
      } catch (error) {
        console.error('failed to get posts:', error);
      }
    };
    fetchData();
  }, [searchTerm]);
  console.log(searchTerm)

  return (
    
    <div className=''>
      <SearchFilterSortSidebar onSearch={handleSearchChange} onFilterChange={handleFilterChange} />
      <div className=' '>
        {posts.map((post, i) => (
          <Post key={i} post={post} post_i ={i} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
