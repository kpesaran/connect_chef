import React from 'react';

export default function SelectedPost({ post }) {
  return (
    // <div className ="" onClick = {()=> setSelectedPost({})}>
    <div>
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
    </div>
  );
}
