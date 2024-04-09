import React, { useState } from 'react';
// import axios from 'axios';

const categoryOptions = [
  { label: 'Event', value: 'event' },
  { label: 'Recipe', value: 'recipe' },
  { label: 'Podcast', value: 'podcast' },
  { label: 'Music', value: 'music' },
];

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedCategory, setSelectedCatergory] = useState('');

  const options = categoryOptions.map((category) => {
    return <option value={category.value}> {category.label} </option>;
  });

  return (
    <>
      <form className='flex flex-col border 8'>
        {/* title */}
        <input
        
          type='string'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Title'
          required
        ></input>
        {/* body */}
        <input
          className='h-96'
          type='string'
          value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder='Write post'
        ></input>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCatergory(e.target.value)}
        >
          {options}
        </select>
      </form>
    </>
  );
};

export default PostForm;
