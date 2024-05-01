import React, { useEffect, useState } from 'react';
import imageUrls from '../../../public/image-urls';
import './styles.css'

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
  };
  post_i: number;
}

const Post: React.FC<PostProps> = ({ post, post_i, onOpen }) => {
  const imageUrlIndex = post_i % imageUrls.length;
  const imageUrl = imageUrls[imageUrlIndex];

  const [selected, setSelected] = useState(null);

  // function handleSingleSelection(getCurrentID) {
  //   console.log(getCurrentID);
  //   setSelected(getCurrentID === selected ? null : getCurrentID);
  // }

  return (
      <>
        {/* {selected === post_i && (
        <div className="background-fade" onClick={() => setSelected(null)}></div>
      )}   */}
      <div
        // onClick={() => handleSingleSelection(post._id)}
        onClick = {()=>onOpen(post._id)}
              className={`post-container px-6 py-4 border gap-12 hover:bg-zinc-100 h-80 `}
      >
        
        <div className=' post-details shadow-lg border'>
          <div className='py-10 '>
            <div className='rounded-full'>{post.neighborhood} </div>
            <div className='city-title'> {post.city}</div>

            <div className='p-8'>{post.category}</div>
          </div>
        </div>
        <div className='post-title-container'>
          <div className='font-bold text-xl mb2'>{post.title}</div>
            <div>{post.body}</div>
          <div>
            
          </div>
          
        </div>
        <img src={imageUrl} alt='picture of food'></img>
        
  
      </div>
    </>
  );
};

export default Post;
