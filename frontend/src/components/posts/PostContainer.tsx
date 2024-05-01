import React, { useEffect, useState } from 'react';

import './styles.css';

import axios from 'axios';
import SearchFilterSortSidebar from '../searchFilterSort/SearchFilterSortSidebar';

import Post from './Post'
// import PostCard from './PostCard';
import PostFullScreen from './PostFullScreen'



const PostContainer: React.FC = () => {
  
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedPost, setSelectedPost] = useState('')
  
  
  function handleFilterChange(newFilter) {
    setFilter(newFilter)
  }
  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm)
  }
  function handleClose() {
    setSelectedPost(null) 
  }
  function handleFocusPost(post_id) {
    const curr_post = posts.find(post => post._id === post_id)
    
    setSelectedPost(curr_post)
  }
  // location, neighborhood, city, state, country

  useEffect(() => {
    const fetchData = async () => {
      try {
        // use location data to make your api requests 
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
  console.log(selectedPost)
  return (
    
    <div className=''>
      <SearchFilterSortSidebar onSearch={handleSearchChange} onFilterChange={handleFilterChange} />
      <div className=' '>
        {selectedPost ? (
          <PostFullScreen post = {selectedPost} onClose = {handleClose}/>
        ) :
          
        posts.map((post, i) => (
          <Post key={post._id} post={post} post_i ={i} onOpen = {handleFocusPost} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
