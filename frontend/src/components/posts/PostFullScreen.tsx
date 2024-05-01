// PostFullScreen.js
import React from 'react';
import imageUrls from '../../../public/image-urls';
import './styles.css'

const PostFullScreen = ({ post, onClose }) => {
  return (
    <>
      <div className='background-fade' onClick={onClose}></div>
      <div className='post-expanded'>
        <button onClick={onClose}>Close</button>
        <div className='highlighted-card'>
          
          <div className='highlighted-name-title'>
            <h1>{post.title}</h1>
            <p className='highlighted-description'>{post.body}</p>
          </div>
          
        </div>
        <img className='highlighted-img' src={imageUrls[0]} alt='Post Image' />
        {/* Add more details like Ingredients and Steps here */}
        <div>
          <div className='border 8'>
            <h4 className='highlighted-ingredient-title'>Ingredients</h4>
            <ul>
              {post.ingredients.map((ingredient) => (
                <li className='p-1 highlighted-ingredients '>
                  {ingredient.name}, {ingredient.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div className='border 8'>
            <h4 className='highlighted-ingredient-steps'>Steps</h4>
            <ol>
              {post.steps.map((step, i) => (
                <li className='p-2 highlighted-steps'>
                  {i + 1}: {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFullScreen;
