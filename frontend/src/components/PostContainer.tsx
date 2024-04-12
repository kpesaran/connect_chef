import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface PostProps {
  post: {
    id: number;
    title: string;
    body: string;
    category: string;
    neighborhood: string;
    city: string;
  };
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className='px-6 py-4 border h-80 flex gap-12 hover:bg-zinc-700 '>
      <div className='shadow-lg border'>
        <div className='font-bold text-xl mb2'>{post.title}</div>
        <div>{post.category}</div>

        <div className='py-14 '>
          <div className='rounded-full'>{post.neighborhood} </div>
          <div> {post.city}</div>
        </div>
      </div>
      <div>{post.body}</div>
    </div>
  );
};

const PostContainer: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'http://localhost:3001/api/v1/postings';

        const response = await axios.get(endpoint);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('failed to get posts:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=' '>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
