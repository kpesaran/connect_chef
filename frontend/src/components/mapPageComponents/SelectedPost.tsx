import React from 'react';

import './styles.css';

import { Post } from '../../interfaces';

interface SelectedPostProp {
  post : Post
}


export default function PostInfoCard({ post }:SelectedPostProp):JSX.Element {
  return (
    // <div className ="" onClick = {()=> setSelectedPost({})}>
    <div className='info-card'>
      <h1 >{post.title}</h1>
      <img src={post.picUrl} alt='picture of finished recipe' />
      <h4>{post.body}</h4>
    </div>
  );
}
