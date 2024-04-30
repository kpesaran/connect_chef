// PostFullScreen.js
import React from 'react';

const PostFullScreen = ({ post, onClose }) => {
  return (
    <>
      <div className='background-fade' onClick={onClose}></div>
      <div className='post-expanded'>
        <button onClick={onClose}>Close</button>
        <img src={post.imageUrl} alt='Post Image' />
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* Add more details like Ingredients and Steps here */}
        <div>
          <div className='border 8'>
            <div>Ingredients</div>
            <div>
              {post.ingredients.map((ingredient) => (
                <p>
                  {ingredient.name}, {ingredient.quantity}
                </p>
              ))}
            </div>
          </div>
          <div className='border 8'>
            <div>Steps</div>
            <div>
              {post.steps.map((step, i) => (
                <p>
                  {i + 1}: {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFullScreen;
