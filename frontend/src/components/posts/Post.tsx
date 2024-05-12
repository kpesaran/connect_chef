import React, { useEffect, useState } from 'react';
import imageUrls from '../../../public/image-urls';
import './styles.css';

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

const Post: React.FC<PostProps> = ({ post, onOpen }) => {
  // const imageUrlIndex = post_i % imageUrls.length;
  // const imageUrl = imageUrls[imageUrlIndex];

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
        onClick={() => onOpen(post._id)}
        className={`post-card flex border`}
      >
        <div className=' post-details shadow-lg border'>
          <div className='flex flex-col py-10 '>
            <span className='rounded-full'>{post.neighborhood} </span>
            <span className='city-title'> {post.city}</span>
            
            <div className='flex flex-col p-8 gap-1'>
              {post.category.map((category, i) => (
                <span key={i}>{category}</span>
              ))}
            </div>
            <span>Views: {post.views}</span>
          </div>
        </div>
        <div className='post-title-container'>
          <span className='font-bold text-xl mb2'>{post.title}</span>
          <span>{post.body}</span>
          
                      <span>{post.steps.length} steps</span>
                      <span>{post.ingredients.length} ingredients</span>
          <div></div>
        </div>
        <img
          className='img-post-card'
          src={post.picUrl ? post.picUrl : imageUrls[0]}
          alt='picture of food'
        ></img>
      </div>
    </>
  );
};

export default Post;
