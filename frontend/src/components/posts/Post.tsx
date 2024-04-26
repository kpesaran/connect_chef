import React, { useEffect, useState } from 'react';
import imageUrls from '../../../public/image-urls'


interface PostProps {
    post: {
      _id: number;
      title: string;
      body: string;
      category: string;
      neighborhood: string;
      city: string;
      lat: number,
        lng: number,
        steps: string[],
        ingredients: { name: string, quantity: string}[]
    };
    post_i: number
}

const Post: React.FC<PostProps> = ({ post,post_i}) => {
    const imageUrlIndex = post_i % imageUrls.length;
    const imageUrl = imageUrls[imageUrlIndex];

    const [selected, setSelected] = useState(null)

    function handleSingleSelection(getCurrentID) {
        console.log(getCurrentID)
        setSelected(getCurrentID===selected ? null : getCurrentID)

    }

    return (
        
        <div onClick={()=>handleSingleSelection(post_i)} className='px-6 py-4 border h-80 flex gap-12 hover:bg-zinc-700 '>
            <img src={imageUrl} alt='picture of food'></img>
        <div>
            <div className='font-bold text-xl mb2'>{post.title}</div>
            
                <div>
                <div>{post.body}</div>
                        <div className='shadow-lg border'>
            
                            
                            <div className='py-10 '>
                                <div className='rounded-full'>{post.neighborhood} </div>
                                <div className='city-title'> {post.city}</div>
                            
                            <div className = 'p-8'>{post.category}</div>
                            </div>
                        </div>
        </div>
                
            </div>
            {selected === post_i && 
                <div>
                    <div className = 'border 8'>
                        <div>Ingredients</div>
                        <div>{post.ingredients.map((ingredient) => (
                            <p>{ingredient.name}, {ingredient.quantity}</p>
                        )) }</div>
                    </div>
                    <div className = 'border 8'>
                        <div>Steps</div>
                        <div>{post.steps.map((step, i) => (
                            (<p>{i + 1}: {step}</p>)
                        ))}</div>
                    </div>
                </div>}
            </div>
    );
};
  

export default Post