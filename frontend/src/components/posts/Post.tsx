import React, { useEffect, useState } from 'react';
import imageUrls from '../../../public/image-urls';
import './styles.css';
import axios from 'axios'

interface PostProps {
  post: {
    _id: number;
    title: string;
    body: string;
    category: string;
    neighborhood: string;
    city: string;
    lat: number;
    lng: number;
    steps: string[];
    ingredients: { name: string; quantity: string }[];
    picUrl: string;
  };
  post_i: number;
}

const Post: React.FC<PostProps> = ({ post, onOpen, userId,fetchPosts, location }) => {

  const [selected, setSelected] = useState(null);

  // function handleSingleSelection(getCurrentID) {
  //   console.log(getCurrentID);
  //   setSelected(getCurrentID === selected ? null : getCurrentID);
  // }
  async function handleDeletePost(postId) {
    const endpoint = `http://localhost:3001/api/v1/postings?`
    const token = localStorage.getItem('token')
    axios.delete(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        postId: postId
      }
    });
    fetchPosts(location)
  }

  return (
    <>
      <div
        
        className={`post-card flex border rounded-md`}
      >
        <div className=' post-details shadow-lg border rounded-md ' onClick={() => onOpen(post._id)}>
          <div className='sub-card-left flex flex-col py-10'>
            <span className='rounded-full'>{post.neighborhood} </span>
            <span className='city-title'> {post.city}</span>
            
            
            <div className='flex flex-col p-8 gap-1'>
              {post.category.map((category, i) => (
                <span key={i}>{category}</span>
              ))}
            </div>
            <span className='text-xl'>Views: {post.views}</span>
            {/* <span>Created By : {post.createdBy}</span> */}
          </div>
        </div>
        
        <div className='post-title-container text-xl '>
          <span className='font-bold text-xl mb2'>{post.title}</span>
          <span>{post.body}</span>
          
                      <span>{post.steps.length} steps</span>
                      <span>{post.ingredients.length} ingredients</span>
                      {userId === post.createdBy ? <button onClick={()=>handleDeletePost(post._id)}>Delete</button>: null}
        </div>
        <img
          className='img-post-card rounded-md'
          src={post.picUrl ? post.picUrl : imageUrls[0]}
          alt='picture of food'
        ></img>
      </div>
    </>
  );
};

export default Post;
