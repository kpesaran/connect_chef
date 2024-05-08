
import './styles.css'


export default function DisplayedPosts({ posts, bounds }) {

    return (
    <div className="flex flex-col items-center posts-container">
            {
                posts.map((post) => (
               
                <div key={post._id} className='post-card-map'>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.neighborhood}, {post.city}, {post.state}</p>
                    </div>
                    <div>
                        <img src={post.picUrl}
                        style={{width: '150px'}}></img>
                    </div>
            </div>
        ))}
    </div>)
}