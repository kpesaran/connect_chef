import React, { useEffect, useState } from 'react';

import './styles.css';

import axios from 'axios';
import SearchFilterSortSidebar from '../searchFilterSort/SearchFilterSortSidebar';

import Post from './Post'
// import PostCard from './PostCard';
import PostFullScreen from './PostFullScreen'



const PostContainer: React.FC = ({ posts, onSearch, onFilterChange, onSortChange, onCuisineFilterChange }) => {
 
  

  const [selectedPost, setSelectedPost] = useState('')
 
  
  
  function handleClose() {
    setSelectedPost(null) 
  }
function  handleFocusPost(post_id) {
    const curr_post = posts.find(post => post._id === post_id)
    
    setSelectedPost(curr_post)
  }
  // location, neighborhood, city, state, country
  console.log(selectedPost)
  return (
    
    <div className='flex flex-col justify-center '>
      <SearchFilterSortSidebar onSearch={onSearch} onFilterChange={onFilterChange} onSortChange={onSortChange} onCuisineFilterChange = {onCuisineFilterChange} />
      
        {selectedPost ? (
          <PostFullScreen post = {selectedPost} onClose = {handleClose}/>
        ) :
         <div className = 'post-container-grid'>
          {posts.map((post, i) => (
            <Post key={post._id} post={post} post_i={i} onOpen={handleFocusPost} />
          ))}
        </div>}
      
    </div>
  );
};

export default PostContainer;
