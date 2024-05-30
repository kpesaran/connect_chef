import './styles.css';
import axios from 'axios';
import type { Post, Location } from '../../interfaces';
interface PostProps {
  post: Post;
  onOpen: (val: string) => void;
  userId: string | null;
  fetchPosts: (val: Location) => void;
  location: Location;
}

const SinglePost: React.FC<PostProps> = ({
  post,
  onOpen,
  userId,
  fetchPosts,
  location,
}) => {
  async function handleDeletePost(postId: string) {
    const endpoint = `http://localhost:3001/api/v1/postings?`;
    const token = localStorage.getItem('token');
    axios.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        postId: postId,
      },
    });
    fetchPosts(location);
  }

  return (
    <>
      <div className={`post-card flex border rounded-md`}>
        <div
          className=' post-details shadow-lg border rounded-md '
          onClick={() => onOpen(post._id)}
        >
          <div className='sub-card-left flex flex-col py-10'>
            <span className='rounded-full'>{post.neighborhood} </span>
            <span className='city-title'> {post.city}</span>

            <div className='flex flex-col p-8 gap-1'>
              {post.category.map((category, i) => (
                <span className='category-background' key={i}>
                  {category}
                </span>
              ))}
            </div>
            <span className='text-2xl font-semibold '>Views: {post.views}</span>
            {/* <span>Created By : {post.createdBy}</span> */}
          </div>
        </div>

        <div className='post-title-container text-xl '>
          <span className='font-bold text-xl mb2 underline'>{post.title}</span>
          <span id='post-description'>{post.body}</span>

          <span className='font-bold'>{post.steps.length} steps</span>
          <span className='font-bold'>
            {post.ingredients.length} ingredients
          </span>
          {userId === post.createdBy ? (
            <button
              id='delete-id-button'
              onClick={() => handleDeletePost(post._id)}
            >
              Delete
            </button>
          ) : null}
        </div>
        <img
          className='img-post-card rounded-md'
          src={
            post.picUrl
              ? post.picUrl
              : 'https://images.unsplash.com/photo-1608949621253-4eedba1d6b95?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JpbGxlZCUyMGNoZWVzZSUyMHNhbmR3aWNofGVufDB8fDB8fHww'
          }
          alt='picture of food'
        ></img>
      </div>
    </>
  );
};

export default SinglePost;
