import './styles.css';

export default function DisplayedPosts({ posts }) {
    console.log(posts)
  return (
    <div className='flex flex-col items-center posts-container'>
      {posts.map((post) => (
        <div key={post._id} className='post-card-map'>
          <div>
            <h2>{post.title}</h2>
            <p>
              {post.neighborhood}, {post.city}, {post.state}
            </p>
          </div>
          <div className='flex'>
            <img src={post.picUrl} style={{ width: '150px' }}></img>
            <div className='p-4 flex flex-col justify-start items-start gap-2'>
              <span>Views: {post.views}</span>
                      <span>{post.steps.length} steps</span>
                      <span>{post.ingredients.length} ingredients</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
