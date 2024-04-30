import React from 'react';
import imageUrls from '../../../public/image-urls';

export default function PostCard({ post, onSelect }) {
  return (
    <div
      className='px-6 py-4 border h-80 flex gap-12 hover:bg-zinc-200 cursor-pointer'
      onClick={() => onSelect(post._id)}
    >
      <img src={post.imageUrl} alt='Post thumbnail' />
      <div>
        <div className='font-bold text-xl mb-2'>{post.title}</div>
        <p>{post.body}</p>
      </div>
      <div className='shadow-lg border'>
        <div className='py-10 '>
          <div className='rounded-full'>{post.neighborhood} </div>
          <div className='city-title'> {post.city}</div>

          <div className='p-8'>{post.category}</div>
        </div>
      </div>
    </div>
  );
}
