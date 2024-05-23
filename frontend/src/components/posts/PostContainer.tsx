import React, { useState } from 'react';

import './styles.css';

import axios from 'axios';
import SearchFilterSortSidebar from '../searchFilterSort/SearchFilterSortSidebar';

import SinglePost from './SinglePost';
import PostFullScreen from './PostFullScreen';
import type { Post, Location } from '../../interfaces';

interface PostContainerProps {
  posts: Post[];
  onSearch: (val: string) => void;
  onFilterChange: (val: string) => void;
  onSortChange: (val: string) => void;
  onCuisineFilterChange: (val: string) => void;
  fetchPosts: (val: Location) => void;
  location: Location;
  updatePostViewCount: (post: Post) => void;
  setShowForm: () => void;
}

const PostContainer: React.FC<PostContainerProps> = ({
  posts,
  onSearch,
  onFilterChange,
  onSortChange,
  onCuisineFilterChange,
  fetchPosts,
  location,
  updatePostViewCount,
  setShowForm,
}) => {
  const userId = localStorage.getItem('userId');
  const [selectedPost, setSelectedPost] = useState<Post | null | undefined>(
    null
  );
  function handleClose() {
    setSelectedPost(null);
  }
  async function handleFocusPost(post_id: string) {
    const curr_post = posts.find((post) => post._id === post_id);
    setSelectedPost(curr_post);
    const token = localStorage.getItem('token');

    const endpoint = `http://localhost:3001/api/v1/postings/${post_id}`;
    try {
      const response = await axios.patch(
        endpoint,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedPost = response.data;

      updatePostViewCount(updatedPost);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className='flex flex-col justify-center '>
      <div className='flex justify-center align-center gap-24'>
        <div></div>
        <div className='ml-16'>
          <SearchFilterSortSidebar
            onSearch={onSearch}
            onFilterChange={onFilterChange}
            onSortChange={onSortChange}
            onCuisineFilterChange={onCuisineFilterChange}
          />
        </div>
        <button
          className='mt-1 self-center justify-self-end hover:: 0 '
          id='make-post-button'
          onClick={setShowForm}
        >
          ADD POST <span id='plus-new-post'>+</span>
        </button>
      </div>
      {selectedPost ? (
        <PostFullScreen post={selectedPost} onClose={handleClose} />
      ) : (
        <div className='post-container-grid  '>
          {posts.map((post) => (
            <SinglePost
              key={post._id}
              post={post}
              onOpen={handleFocusPost}
              fetchPosts={fetchPosts}
              location={location}
              userId={userId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostContainer;
