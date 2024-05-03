import React from 'react';

import './styles.css'

export default function PostInfoCard({ post }) {
    
  return (
    // <div className ="" onClick = {()=> setSelectedPost({})}>
      <div className='info-card'>
        
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
    </div>
  );
}
